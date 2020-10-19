<!-- Copy this file into tools/site/coursenameFolder & start editing -->

author:Lindsay Walker
summary: Module 5 of Selenium with Java. Learn to write Selenium tests in X programming language with X Test runner and X framework
id: Module5_SeleniumJava
categories: advanced
tags: java
environments: Web
status: Hidden
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-6735579-1

<!-- ------------------------ -->
# Module 5 – Title of codelab
Add Sections and Durations
Then for each section use Header 2 or '##' and specify an optional duration beneath for time remaining calculations Optional section times will be used to automatically total and remaining tutorial times In markdown I've found that the time is formatted hh:mm:ss

Example

<!-- ------------------------ -->
## 5.01 What You’ll Learn
Duration: 0:02:00

<!-- ------------------------ -->
## 5.02 Testing Strategy
Duration: 0:12:00


Testing pyramids are a way of framing the strategy for what kind of tests you are going to create as a part of your testing suite(s) and expressing the amount of types of tests your team or company is going to create. At the bottom of the pyramid is the easiest, most plentiful, and typically cheapest type of tests to create. At the top of the pyramid are the types of tests that are more labor- and cost-intensive tests that make up a smaller portion of your suite(s). Learn more about the [details of a test pyramid here](https://medium.com/@Colin_But/define-testing-strategy-using-the-testing-pyramid-1dabee37e823).


<img src="assets/5.02A.png" alt="Pyramids" width="650"/>`

There are many versions of the pyramid created by experts in the testing field, and your own team or company can decide on which strategy for developing tests works for you. It is, however, important to understand how the plan is set up and the considerations for types of tests, the best layer to test on, and how to plan so your test suite is accurately fulfilling the purposes that stakeholders expect.


#### Video

Watch [5.02 Testing Strategy](https://drive.google.com/file/d/1RwwCDmqY4Q1H8NG8LFx0VsKxTjb5flCK/view?usp=sharing), Excerpts from “Pyramids Are Ancient” By Richard Bradshaw to learn about how to develop a testing strategy for your business, as well as tip on how to plan and identify the layers of your application you should run your tests on.

 ![https://drive.google.com/file/d/1RwwCDmqY4Q1H8NG8LFx0VsKxTjb5flCK/preview](https://drive.google.com/file/d/1RwwCDmqY4Q1H8NG8LFx0VsKxTjb5flCK/view?usp=sharing)


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


[Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy#:~:text=Sauce%20Connect%20Proxy%E2%84%A2%20is,or%20behind%20a%20corporate%20firewall.) is software that enables you to establish a secure connection between applications hosted on an internal server and the Sauce Labs virtual machines (such as Jenkins) or real devices that are used for testing. It also allows you to create a secure connection for uploading tests, application, and source code.

In many cases, testers need to run their tests on internal sites. These can be dev/staging versions of their production site or actual internal sites only employees use. In either case, these sites are not available out in the open internet for sauce to access. The best, most secure option is to create a connection with Sauce Connect Proxy. Sauce Connect Proxy uses a proprietary [TLS protocol](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/) to encrypt traffic between Sauce Labs and your network and servers.


### Download Sauce Connect Proxy

The first step is to download The Sauce Connect Proxy software -- available on the **[Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCSDEV/Sauce+Connect+Proxy) **page in the Sauce Labs Cookbook -- and extract the contents of the **.zip** or **.gz** download package. You can also get the software on the [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) platform under **Tunnels.**


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


You can copy the command that you will find at the bottom of the **Tunnels** page, and paste this into your terminal as well, instead of typing what is above. Once you paste, append the command line with `-i <Sauce tunnel name>`:. In this example, I’ve called mine `linds-proxy-tunnel.`

<img src="assets/5.03D.png" alt="Command to run tunnel" width="750"/>

Your command should look like this:

<img src="assets/5.03E.png" alt="Terminal command to run tunnel" width="750"/>

After `-u` you will see your username and after` -k `you will have your access key, and `-i  `prepend the name you made up for your tunnel. Learn more about the other commands you can use to configure your tunnel at [Sauce Connect Proxy Command-Line Quick Reference Guide](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide). Hit enter and you should see your tunnel up and running.

<img src="assets/5.03F.png" alt="Terminal running tunnel" width="500"/>


<img src="assets/5.03G.png" alt="Tunnel running on Sauce Labs" width="750"/>



### Set Up Proxy Environment
// ...




### Run Tests Using Sauce Connect Proxy

Once your tunnel is up and running, (you should see the message Sauce Connect is up in terminal)  and you have updated your `config.js` and `DriverFactory.js` files, you can run your tests in Sauce Labs using Sauce Connect Proxy. First, update your` .bash_profile `with an environment variable (it must match the` tunnel id `your use to start the tunnel with).

<img src="assets/5.03H.png" alt="Tunnel Tests running on Sauce Labs" width="750"/>

You will want to restart your terminal and run `source ~/.bash_profile` so your machine looks for the new `SAUCE_TUNNEL` variable.

Now you can run `mvn clean test???????` in terminal and see your tests run both in Jenkins and on Sauce Labs with a tunnel. Note that because it is running through a proxy, you will no longer be able to see the name and status of the tests. You can see the completed code [here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/javascript/Mod5/5.03).

<img src="assets/5.03??.png" alt="Bash Profile" width="750"/>


#### Final Code

!-- ------------------------ -->
## 5.04  Running Parallel Tests
Duration: 0:12:00

Your tests still take a good deal of time to run since they're executing in series (i.e., one after another). As our suite grows, test latency will grow with it, if you continue to run tests in series the time it takes to run your test suite can grow exponentially.

In this lesson you will be learning how to set up Sauce Labs to run tests in parallel. This means that you can run two or more tests, using two or more instances of DriverFactory at the same time.  Previously what you were doing was running `------ `first, then running `-------` once it was done.

Parallelization is one of the main advantages to using a platform like Sauce Labs, however you also must be careful when designing a test suite to make sure the tests can be run in parallel, and in any order, or else account for and create code that does run certain tests in order. Luckily, our test suite has been well set up to run in parallel.


### Autonomous Tests

Autonomous tests are the type of tests that are not dependent on other tests to be run. Consider the following set of tests:



1. **LoginTest–** This test is performed first to allow you to login to the platform.
2. **ShoppingTest–** This test is performed second, where the user chooses and adds an item to the test.
3. **CheckoutTest–** This test is performed third, where the user accesses the checkout screen where they can pay and order the item from their shopping cart.

Clearly these tests aren’t autonomous when you are doing User Interface (UI) tests; you cannot perform CheckoutTest until you have logged into the platform and chosen an item for the shopping cart. There are ways, however, to set up your test so you can “jump right in” with a filled shopping cart without having to wait for other tests to run by using API calls and other tricks that can help you write a suite of autonomous tests.


### Avoid the Static Keyword

A static variable or function means that a given variable or function can only exist as one instance for the life of a program, and that the value of that variable cannot change. That can be a major problem if you reuse the variable or function several times for different tests.

.......

<img src="assets/5.04.png" alt="Sauce W3C case" width="550"/>


............

### Run Parallel Tests

Before you get started, head to the [Sauce Labs Dashboard](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) and look under **Account **>** User settings** and check out how many tests you (and your team) can run at once.

<img src="assets/5.04C.png" alt="Sauce W3C case" width="650"/>

Once you are sure that you are able to run tests in parallel (you should have less tests than your concurrency limit), you can run your tests. If you send more jobs than your concurrency limit, Sauce Labs will queue the excess and run them as the initial batch of jobs finish.

Run`-----------` and visit the [Sauce Labs Dashboard ](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link)while your tests are running. You should see more than one test running at the same time, and notice that your test suite as a whole runs more quickly! You can see the completed code [here]().

<img src="assets/5.04D.png" alt="Sauce W3C case" width="750"/>


#### Final Code


### Install
// .....



<!-- ------------------------ -->
## 5.05 Grouping Tests
Duration: 0:08:00

<!-- ------------------------ -->
## 5.06 Setting Up Jenkins
Duration: 0:25:00


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


### Jenkins Setup

A simple way to get started is to use [Homebrew ](https://brew.sh/)to install Jenkins on MacOS. Once Homebrew is installed on your computer, use the instructions on the [Jenkins download page](https://jenkins.io/download/). If you are using Homebrew on MacOS, all you need to do is run this command in the terminal:


```
sudo brew install jenkins
```


You will have to enter your password, and Jenkins should install on your machine.

Jenkins was built on Java, and in order for your program to work, you will also need to install either [Java version 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) or Java version 11. If you try to install Jenkins and get this error, install Java 8 or 11 and retry installing Jenkins.

<img src="assets/5.06D.png" alt="Wrong Java Error" width="550"/>

#### NOTE

To Install JDK 8, visit the [Java 8 download page](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) from Oracle. You may have to create an account.

<img src="assets/5.06E.png" alt="JDK 8" width="650"/>


Download the file, then open and follow the instructions to install Java.


<img src="assets/5.06F.png" alt="Install JDK 8" width="650"/>


If you haven’t installed Java before, you’ll need to update your `.bash_profle `(or your `.zshrc` file on MacOS Catalina) with the system variables and PATH:

<img src="assets/5.06G.png" alt="Java Path Variable" width="650"/>


--


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



### Create a Project

Keep in mind that you typically would not be the one setting up Jenkins to run your tests; your administrator or DevOps team would be adding your test code as a part of the pipeline to put code into production, typically on a staging server. Three typical jobs that are in almost every pipeline are build, test, and deploy. One of the Sauce Lab sweet spots is the ability to create the _test _project piece of the pipeline.

Now that Jenkins is loaded in the browser, let's create a **Project **and configure it to run our shallow tests against Chrome on Windows 10.



1. Click **New Item** from the Dashboard menu.

<img src="assets/5.06L.png" alt="New Project" width="350"/>

2. Give it a name based on what it’s testing (**-------------**).
3. Select the **Freestyle** project option.

<img src="assets/5.06M.png" alt="New Project" width="550"/>

4. Click **OK**.

This will load a configuration screen for the Jenkins project.


### Jenkins Project Configuration

Once you have clicked on a project and chosen **Configure** from the menu, go to the Advanced Project Options section, select the **Advanced** button:

<img src="assets/5.06N.png" alt="Advanced Configurations" width="650"/>

1. Choose the checkbox for **Use custom workspace.** This is where your test files are stored on your computer. When setting up a real CI pipeline, you would direct this to the local copy of your GitHub repo.
2. Provide the full path to your test code.
3. Leave the **Display Name** field blank.

<img src="assets/5.06O.png" alt="Test Code Path" width="650"/>

4. Scroll down to the **Build** section and select **Add build step.**
5. Select **Execute shell.**.
6. Add the commands below to run a test on only the tests tagged with `@shallow`, using Chrome 50 and Windows 10 for your environment:

```
BROWSER=chrome BROWSER_VERSION=50 PLATFORM='Windows 10' npm test -- --grep=@shallow
```



To return to the dashboard and see the list of projects, you can click **Back to Dashboard **in the menu. You can also click **Configure** to change or update the changes you just made:

<img src="assets/5.06P.png" alt="Back to Dashboard or Configure" width="750"/>


### Add Plugin

//....


First, return to the dashboard (You can do this by clicking the** Jenkins** icon in the menu at any time). Next, click on **Manage Jenkins** > **Global Tool Configuration**.

<img src="assets/5.06Q.png" alt="Manage Jenkins Global Tools Configuration" width="750"/>

NOTE
If you see a warning at the top of your Global Tool Configuration dashboard, you can go to the plugin manager, choose the **Available** tab, and install necessary updates.

For those updates to take effect, you need to type in terminal:

<img src="assets/5.06R.png" alt="Global Tools Config" width="750"/>

Brew services restart jenkins


--


Scroll down to the bottom where you will see the --------------

### Run Your Tests Using Jenkins

To run your test, simply click **Build Now** in the menu, then click on the sphere next to the test number on the list to jump to the console output. Since Mocha has a built-in test reporter in the console, you can view the test results there.

<img src="assets/5.06T.png" alt="Test Result Output" width="750"/>


#### Video

Watch [5.06 Run Jenkins with Homebrew ](https://drive.google.com/file/d/1gkwQRLi5fWmqEsYopelWyNMT0UleejxJ/view?usp=sharing)for a walk through of how to run and check the configuration of your test job and Node environment in Jenkins.

![https://drive.google.com/file/d/1gkwQRLi5fWmqEsYopelWyNMT0UleejxJ/preview](https://drive.google.com/file/d/1gkwQRLi5fWmqEsYopelWyNMT0UleejxJ/view?usp=sharing)


#### NOTE

Ideally, your test code would live in a version control system such as Git. The first thing you will need to do is get the plugin under **Manage Jenkins > Manage Plugins.** You can configure this under **Manage Jenkins > Global Tools Configuration**. To use a Git project, create a new project from the Jenkins homepage, then under the configuration of that project, choose Git for Source Code Management.

<img src="assets/5.06.png" alt="--- Configuration" width="750"/>

Learn more about setting up GitHub source control in [this tutorial.](http://www.mastertheboss.com/cool-stuff/jenkins/jenkins-source-code-management-with-git)

--

<!-- ------------------------ -->
## 5.07 Jenkins and Sauce OnDemand
Duration: 0:15:00

You haven’t run a test yet that has successfully passed in Sauce Labs. In this lesson, you’ll learn to connect your Jenkins server to your Sauce Labs account using the Sauce OnDemand Jenkins plugin, as well as run a test with Jenkins using Sauce Connect Proxy.


### Test Reporters

You have been running your tests and observing the output in the console, however, in many cases this may not be the best method to see the status of your test. When you want to share the output of the test with others—human or software—a formatted .xml doc can be much more useful. This doc lets you obtain a longer form of printout for test results and has the potential for use with an analytics tool. Some options include:



*   [JUnit Results Reporter](https://www.jenkins.io/doc/pipeline/steps/junit/#:~:text=Jenkins%20understands%20the%20JUnit%20test,tracking%20failures%2C%20and%20so%20on.) plugin
*   [JUnit Reporter for Mocha](https://www.npmjs.com/package/mocha-junit-reporter)

Note that there are plugins/additional configurations you’ll have to modify in the **Manage Jenkins **section to get these working as well. In these examples, you will not be using a reporter;instead you’ll use the reporter that is built in with mocha on the console/ terminal.


### Force a Failed Test

We want to run a test with Jenkins that has a failed test so that you can see an example of the output provided to a reporter.

// ....




### Set Up Sauce Labs OnDemand

The full reference for configuring Sauce OnDemand and support can be found [here.](https://wiki.saucelabs.com/display/DOCS/Jenkins+and+Sauce+OnDemand+Plugin+Quickstart+Guide)

The first thing you will need to do is install the Git Jenkins plugin, then go to **Manage Jenkins **>**  Manage Plugin**s. Search for **Sauce **under the **Available **tab.

<img src="assets/5.07C.png" alt="Sauce On Demand Plugin" width="650"/>

Install and restart Jenkins in the terminal with Homebrew (which is quicker) by typing:


```
brew services restart jenkins
```


Once the plugin is installed, you can check under the **Installed **tab on the same page.


### Configure Credentials with Sauce OnDemand

You can set up your Sauce Labs credentials to be passed into tests as variables running on Jenkins in the same way that you set up your tests to get the credentials stored on your personal machine as variables. The nice thing about this is that you can control which Jenkins users have access to these credentials, and allow or disallow certain people that use the same Jenkins instance to use these credentials.

Go to **Security > Manage Jenkins > Manage Credentials**.

Depending on how Jenkins is set up, other instances of Jenkins may have different domains. In this example, you can set things up in the** global **domain:

<img src="assets/5.07D.png" alt="Sauce On Demand Plugin" width="450"/>


Click on the link for **adding some credentials**:

<img src="assets/5.07E.png" alt="Global Credentials" width="450"/>

You can look on [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) under **Account **> **User Settings** to find your username and profile or look at the variables you set up in your .bash_profile. From the **Kind** dropdown, choose **Sauce Labs**, then enter your username and Sauce Access Key. Give it a logical tag and name as well.

<img src="assets/5.07F.png" alt="Add Username and Sauce Access Key" width="650"/>


Once you click **Save**, you should see your new access key listed under **Global credentials**.

<img src="assets/5.07G.png" alt="See Global Credentials" width="650"/>

Now you can go to your project and set up your credentials. Go back to your Jenkins dashboard, choose the project you created, and then **Configure **in the menu. Scroll down, and under **Build Environment**, click the **Sauce Labs Options** checkbox. Make sure the credentials you just set up are listed here.


### Run Tests with Sauce OnDemand

You can now run a test with [Sauce OnDemand](https://wiki.saucelabs.com/display/DOCS/Installing+and+Configuring+the+Sauce+OnDemand+Plugin+for+Jenkins) with just a couple of tweaks to the code.

// ....


### Running a Test with Sauce OnDemand and Sauce Connect

This part is simple: to get a Sauce Connect Proxy tunnel up and running, all you’ll need to do is change one Jenkins configuration in your job. All of your tests will be routed through that tunnel.

Go to **Shallow Test Chrome 75 Windows 10 **>** Configure**. Under** Build Environment, **check the box that says** Sauce Labs Support**,** **then** **check the **Enable Sauce Connect **checkbox, and choose the global credentials you set up (or add new ones).


<img src="assets/5.07J.png" alt="Enable Sauce Connect" width="750">

You don’t have to do anything to set the variable, or install any software or run commands to get the tunnel running—Sauce OnDemand creates a tunnel and runs the tests in it for you.

Now you can run your tests.// ....


#### Final Code

// ...

<!-- ------------------------ -->
## 5.08 Quiz
Duration: 0:05:00

!Embed URL](Share URL)

<!-- ------------------------ -->
## 5.09 Resources and Community
Duration: 0:03:00


Here is a list breaking down a majority of the Selenium resources available, along with information about what these resources provide.


### Documentation & Tips


#### [Selenium HQ](http://bit.ly/se-info-1)

This is the official Selenium project documentation site. It doesn’t always have the most up-to-date version, but there is loads of helpful information here.


#### [The Selenium Wiki](http://bit.ly/se-info-29)

This is where all the good stuff is — mainly, documentation about the various language bindings and browser drivers. If you're not already familiar with it, take a look.


#### [Elemental Selenium Archives](http://bit.ly/se-info-3)

These are tips that will help you expand your Selenium skills to write tests for nearly anything you can imagine using Selenium for. There are over 70 different Selenium problems and solutions covered. They're in Ruby, but the code has been open-sourced with a fair number of them being ported into other programming languages. You can find the code for them [here](https://github.com/tourdedave/elemental-selenium-tips).


#### [Sauce Labs Wiki](https://wiki.saucelabs.com/)

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