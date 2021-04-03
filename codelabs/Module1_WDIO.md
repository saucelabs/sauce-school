<!-- Copy this file into tools/site/coursenameFolder & start editing -->

summary: Module 1 of the WebdriverIO for Sauce Labs Course. Learn to ...
id: ModuleX-SeleniumLang
categories: beginner
tags: wdio  
environments: Web
status: One or more of Draft
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-86110990-1
author:Lindsay Walker
<!-- ------------------------ -->
# Module 1 – Title of codelab

<!-- ------------------------ -->
## 1.01 What You'll Learn
Duration: 0:10:00

* Setup the environment we need to use WebdriverIO.

<!-- ------------------------ -->
## 1.02 Setup WebdriverIO
Duration: 0:05:00

## Install Node.JS

The project is build on top of [Node.js](https://nodejs.org/en/download/) which is a JavaScript runtime built on Chrome's V8 JavaScript engine. It can be installed on all major OS systems such as Windows, Mac or Linux.

Open the [download page](https://nodejs.org/en/download/) of the project and choose the installer of your environment. It is recommended to download the latest LTS (long-time support). Create or open the directory where you want to put your tests then use the command:

```
npm init
```

To install Node. You should see the following in your project structure:

```
your-test-directory
    /node_modules
    package.json
    package-lock.json
```


This will also install NPM for you which is the package manager for Node.js, which manages updates, and allows you to install different dependencies when you update the `package.json` file that is installed wehn you install NodeJS. NPM is required to download the WebdriverIO package.

## Setup Course Directory

As we walk through each chapter we will build up a project that we can use as to run automated tests with WebdriverIO. To check in all changes, let's create a directory for it and init git:

```
$ cd ~
$ mkdir ./webdriverio-hands-on
$ cd ./webdriverio-hands-on
$ git init
```

If you don't have git installed you can leave out the last step and don't check in. There are various of [documentations](https://git-scm.com/book/en/v1/Getting-Started) that will get you up and running with Git.

## Download Browser Driver

In order to be able to run tests using [WebDriver](https://w3c.github.io/webdriver/) we need a browser driver. The browser driver is a server that handles the automation of the browser. It provides a [REST API interface](https://w3c.github.io/webdriver/#endpoints) that allows you to just send basic HTTP request to that driver and it handles all complex steps to get the automation command handled in the browser. There is a browser driver for every major browser vendor (e.g. Chrome, Firefox, Safari, Edge and IE). If you want to automate any of these browser you need to have the specific driver running.
<!--
For simplicity reasons we just use Chrome in this course, therefor we have download and setup Chromedriver. Every Chrome version requires a specific version of the browser. You can find the version of your Chrome browser [here](chrome://version/) (please open the link with Chrome).

To find the Chromedriver version open the [download page](http://chromedriver.chromium.org/downloads) of the Chromedriver project. Find the right version and download it on your machine. Extract the zip file and ensure that the binary inside is accessible in your `$PATH`. You can also run the following commands (if you have Chrome v74 installed):

```
$ curl -o ~/Downloads/chromedriver.zip https://chromedriver.storage.googleapis.com/74.0.3729.6/chromedriver_mac64.zip
$ unzip ~/Downloads/chromedriver.zip -d ~/Downloads/chromedriver
$ sudo mv ~/Downloads/chromedriver/chromedriver /usr/bin
```

You can also just use NPM to install the Chromedriver via:

```
$ npm install -g chromedriver
```

To check if Chromedriver is available call:

```
$ chromedriver --version
```

It should return something similar to:

```
ChromeDriver 74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29})
``` -->
<<<<<Does WDIO need a driver installation still?
<!-- ------------------------ -->
## 1.0x Title
Duration: 0:05:00


<!-- ------------------------ -->
## 1.0x Title
Duration: 0:05:00

<!-- ------------------------ -->
## 1.0x Title
Duration: 0:05:00

<!-- ------------------------ -->
## 1.0x Title
Duration: 0:05:00
