summary: Module 4 of the Sauce Labs Quickstart course.
id: Module4-Quickstart
categories: advanced
tags: quickstart
environments: Web
status: Draft
analytics account: UA-86110990-1
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
author:Lindsay Walker

<!-- ------------------------ -->
# Module 4 – iOS Appium Mobile Simulator Tests
Add Sections and Durations
Then for each section use Header 2 or '##' and specify an optional duration beneath for time remaining calculations Optional section times will be used to automatically total and remaining tutorial times In markdown I've found that the time is formatted hh:mm:ss

Example

<!-- ------------------------ -->
## 4.01 What You'll Learn
Duration: 0:01:00

### iOSAppium Tutorial
In this module, you will be walked through an example of setting up and running an Appium Java test with Android, covering two specific cases:
* Testing an [iOS mobile application]() on Sauce Labs Emulators
* Testing an [iOS mobile web]() application on the Sauce Labs Emulators

Both of these tests will be created using the **Appium driver, Java, and the TestNG test runner**, and will be run locally and using the virtual devices on the Sauce Labs Cloud.

### Skills & Knowledge

* Learn about how to set up your environment to run an Appium mobile app or mobile browser test


<!-- ------------------------ -->
## 4.02 Set Up a Local iOS Test Environment
Duration: 0:05:00

This module is created to walk you through the steps you need to take to get a test running on [Sauce Labs.](http://app.saucelabs.com/?utm_source=referral&utm_medium=LMS&utm_campaign=link) In this lesson you will:

* Install dependencies to run local Appium tests
* Download test code for running a test on a local Appium Server
* STart an Appium Server
* Start an Emulator to run your app & tests on, using the XCode device emulator.

If you would like to follow along, you can start with the [example application]() and [Appium Test code]() to run on your local machine, or **skip ahead to module 4.03 to start running tests on Sauce Labs**.
#### Video
**[iOS Appium Project Setup]()**

<video id=""></video>

### Resources
Download the following resources on your computer:

* Download or fork and clone the [iOS Test Code](). See the _/Mod4/??_ folder to follow along starting on the next module.

* Download the [Swag Labs Mobile App .apk file](https://github.com/saucelabs/sample-app-mobile/releases).

* Scroll down and find the **filename** file. Choose the latest version you can find.

<img src="assets/QS2.02A.png" alt="Swag Labs Mobile App Repo" width="650"/>

### Dependencies

To run a local test, you will need to set up and install the following:

* Appium
    * [Appium Desktop App](https://github.com/appium/appium-desktop/releases) or
    * Appium Server: [Set it up ](https://www.swtestacademy.com/how-to-install-appium-on-mac/)with iOS
* XCode (automatically installed on Mac)
* Java JDK 8 or higher
* [Homebrew](https://brew.sh/) to install and manage dependencies
* [Carthage](https://formulae.brew.sh/formula/carthage)
* An IDE to edit test code like [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/)

### Getting It Running

To run an app on your local machine, first install all the dependencies above and download the resources. If you are unfamiliar with using Appium and Android Studio to create an emulator and environment to run your tests against, use the following cheat sheet.


#### Cheat Sheet

[Quickstart – XCode and Appium Environment Setup](https://docs.google.com/document/d/1e9KEhn0BP9GMGG0ynfcKSMctbLw-IS1w3mseyYAgrbI/edit?usp=sharing)



#### Appium Doctor

Appium Doctor is a useful tool for checking to make sure that the dependencies and necessary variables are set correctly for your native test to run. Simply install it and run the command `appium-doctor. `

<img src="assets/QS2.02B.png" alt="Appium Doctor Interface" width="550"/>


Check to make sure all your dependencies for Appium are installed, such as `NodeJS` and...


### Basic Local Run Steps

Once you have everything downloaded and installed, you need to do the following before you can run your code:

Open **Android Studio** and start an emulator.


* Go to
<!-- ------------------------ -->
## 4.03 Sample iOS Appium Test Code Overview
Duration: 0:10:00

<!-- ------------------------ -->
## 4.04 Run an iOS Emulator App Test on Sauce Labs
Duration: 0:10:00

<!-- ------------------------ -->
## 4.05 Run an iOS Emulator Web Browser Test on Sauce Labs
Duration: 0:10:00

<!-- ------------------------ -->
## Section 1
Duration: 0:10:00

<!-- ------------------------ -->
## Section 1
Duration: 0:10:00
