summary: Module1 of the Advanced Selenium Java Coures.
id: Module1-AdvancedSeleniumJava
categories: Java
tags: advancedjava  
environments: Web
status: Draft
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
author:Lindsay Walker
<!-- ------------------------ -->
# Module 1 – Advanced Selenium with Java

<!-- ------------------------ -->
## 1.01 What You'll Learn
Duration: 0:01:00

In this module, you will quickly be walked through the dependencies necessary to set up your environment, and be guided through cloning or downloading a base set of code that provides all the jar files and resources needed to build this test suite. In this course you will learn to create a test suite using **Java**, **Selenium 4**, and **Junit5**, using features that go along with these tools of the trade for Java testers.

<!-- ------------------------ -->
## 1.02 Quality and Continuous Testing
Duration: 002:00

### Manual to Automated Testing

Manual testing involves taking the click-and-check that a manual tester would do in one environment at a time, and automating it with test automation code. By using automation, we no longer rely on a human to test every single situation- You can run these tests at all times of the day.

In addition, with a well designed automation suite, you can start running tests in parallel, running several tests at the same time, and even run tests on multiple browsers and devices simultaneously.

A well designed testing solution can also test at different points in the testing cycle (not just when a product is about to be pushed into production) to find issues earlier and make debugging easier.


### Challenges and Drawbacks

Finding good test automation engineers, or training manual testers is a difficult process. Some developers may be able to write their own tests, however scaling these up to a solution that does a good job of testing an application in its entirety requires a skilled test engineer.

There are hundreds of different combinations of tools, frameworks, and libraries to do this with, and understand the capabilities and limitations of each is a challenge itself.

In addition, understanding the differences between what a human can test, and how to write instructions in test code in a way so computers can run a test requires a shift in understanding, and careful structuring and designing of a testing framework. A well designed framework uses abstraction and sophisticated programming methods, and takes into account that a computer cannot adapt to new conditions the way that a human could.

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


Source: [Alexy Litvinenko](https://www.dreamstime.com/sonar512_info)


### Continuous Testing

Continuous testing is a shift-left journey towards earlier and more frequent testing as well as a shift-right towards testing your product as a whole as new features are committed and merged.




<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


The biggest transition your team will have to make is evolving the frequency of testing, and setting up practices and pipelines that trigger tests to run on a more frequent basis be it running daily tests, testing with every build, or even with every commit. The biggest factor of the maturity of the testing initiative is looking at how frequently tests are run.  

The companies who are early in the path to continuous testing only run their tests at release, perhaps at a scheduled interval. As your path to continuous testing evolves, changes are tested any time a single feature is built, or even with each code commit, using a truly atomic testing suite.

You have to have a reliable testing suite in order to do this kind of testing, as well as a suite well designed to test individual features, that is well named, organized, and created through collaboration across engineering and testing teams.




<!-- ------------------------ --
## Section 1
Duration: 0:10:00



<!-- ------------------------ --
## Section 1
Duration: 0:10:00



<!-- ------------------------ --
## Section 1
Duration: 0:10:00

-->
