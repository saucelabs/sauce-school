<!-- Copy this file into tools/site/coursenameFolder & start editing -->

summary: Module 2 of the Cypress on Sauce course ...
id: Module2-Testrunner
categories: beginner
tags: testrunner  
environments: Web
status: Draft
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
author:Lindsay Walker
<!-- ------------------------ -->
# Module 2 –

<!-- ------------------------ -->
## 2.01 What You'll Learn
Duration: 0:01:00

### Skills & Knowledge

* How to install and set up Sauce Connect Proxy on your machine


<!-- ------------------------ -->
## 2.02 Set Up Sauce Connect
Duration: 0:03:00

[Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy#:~:text=Sauce%20Connect%20Proxy%E2%84%A2%20is,or%20behind%20a%20corporate%20firewall.) is software that enables you to establish a secure connection between applications hosted on an internal server, or other location that is behind a firewall, and the Sauce Labs virtual machines or real devices that are used for testing. It also allows you to create a secure connection for uploading tests, application, and source code.

In many cases, testers need to run their tests on internal sites. These can be dev/staging versions of their production site or actual internal sites only employees use. In either case, these sites are not available out in the open internet for sauce to access. The best, most secure option is to create a connection with Sauce Connect Proxy. Sauce Connect Proxy uses a proprietary [TLS protocol](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/) to encrypt traffic between Sauce Labs and your network and servers.


### Download Sauce Connect Proxy

The first step is to download The Sauce Connect Proxy software -- available on the **[Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCSDEV/Sauce+Connect+Proxy)** page in the Sauce Labs Cookbook -- and extract the contents of the **.zip** or **.gz** download package. You can also get the software on the [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) platform under **Tunnels.**


<img src="assets/5.03A.png" alt="Tunnels Software" width="750"/>


Extracted the contents into another folder besides your **Dowloads** folder (take the Sauce Connect Proxy folder and move it into another directory). In this example, I moved mine into the **Documents** folder.

<img src="assets/5.03B.png" alt="Tunnel Software Directory" width="450"/>

### Set Up Your Tunnel

Go to the **Tunnels** tab in the [Sauce Labs app](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link).


<img src="assets/5.03C.png" alt="Tunnels Menu" width="250"/>


Navigate to the folder using the terminal where you saved the Sauce Connect download (this one is in **Documents/sc-4.6.2-osx**). Next, type and run the command below. Make sure to fill in your credentials (username after the `-u` command and access key after` -k`) and add your tunnel name (aka tunnel identifier) after the `-i `command.



```
bin/ sc -u <SAUCE_USERNAME> -k <SAUCE_ACCESS_KEY> -i <SAUCE_TUNNEL>
```

In this example, I’ve called mine `linds-proxy-tunnel.`

<img src="assets/5.03E.png" alt="Command to run tunnel" width="750"/>

###Note
Negative
: **Create Environment Variables for Sauce Labs –** The first thing you should do when creating a test is set up environment variables on your local machine or environment for your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`. It is important to save your Sauce username and access key as environment variables, instead of coding them into your test.  It will also make transitioning to a continuous integration pipeline easier, since they will use the same environment variables.  Watch [this video](https://drive.google.com/file/d/1qezKtvBpn94bBTJgbAd2MSx4ByNx7oaz/view?usp=sharing) to learn how to set up environment variables with your Sauce Labs credentials on a Mac, or view the [instructions for Windows](https://docs.google.com/document/d/1Cb27j6hgau5JHmAxGHPihd3V4Og3autPCei82_m1Ae8/edit?usp=sharing).

You also have the option to copy the command that you will find at the bottom of the **Tunnels** tab in the [Sauce Labs app](https://accounts.saucelabs.com/am/XUI/#login), and paste this into your terminal as well, instead of typing what is above. Once you paste, append the command line with `-i <Sauce tunnel name>`.

Your command looks like this:

<img src="assets/TRT2.02A.png" alt="Terminal command to run tunnel" width="750"/>

After `-u` you will see your username and after `-k` you will have your access key, and `-i` add the name you made up for your tunnel. Learn more about the other commands you can use to configure your tunnel at [Sauce Connect Proxy Command-Line Quick Reference Guide](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide). Hit enter and you should see your tunnel up and running.

<img src="assets/5.03F.png" alt="Terminal running tunnel" width="500"/>


<img src="assets/5.03G.png" alt="Tunnel running on Sauce Labs" width="750"/>


<!-- ------------------------ -->
## 2.03 Run Your Cypress Test with Sauce Connect
Duration: 0:01:00

First, make sure that your Sauce Connect tunnel is currently running, as per the instructions in the last module. Now you can make a simple change to `.sauce/config.yml` and run your Cypress test

### Start the Tunnel
If your tunnel is not already running, simply copy the command that you will find at the bottom of the **Tunnels** tab in the [Sauce Labs app](https://accounts.saucelabs.com/am/XUI/#login), navigate to the folder using the terminal where you saved the Sauce Connect download , and paste this into your terminal.

### Run a Test With a Tunnel

#### Use a Flag
The easiest way to run your existing tests through a tunnel is to use the command line with a `--tunnel-id` flag. Simply navigate to the test project and use the command

```
saucectl run --tunnel-id your-proxy-tunnel
```

#### Update the Tunnel ID in Config
Next, you will need to take a look at the tunnel id that you have up and running. You can look on the [Sauce Labs app](https://accounts.saucelabs.com/am/XUI/#login) in the **Tunnels** tab and note the TunnelId, or use the one you entered to start Sauce Connect.

<img src="assets/TRT2.03A.png" alt="Tunnel ID" width="550"/>

Open `.sauce/config.yml` in your test project file, and add or update the `tunnel: id:` under the `sauce:` configurations:

<img src="assets/TRT2.03B.png" alt="Tunnel ID" width="450"/>

### Parent Tunnels
Many companies may also choose to have their organization set up shared or _Parent Tunnels_ on Sauce Labs, which anyone in their organization can use without having to worry about configuring their own tunnel.

To use a parent tunnel simply check the **Tunnels** on your Sauce Labs app for a



<!-- ------------------------ -->
## 2.04 Test with Cypress on a Local App
Duration: 0:01:00

Cypress on Sauce allows you to perform tests on a test that you have on your local machine or environment, then test it against the wide variety of devices available on Sauce Labs.

in this example, we will be downloading the Swag Labs web app, and running it locally.

### Download Swag Labs (Optional)

If you would like to follow along, You can follow the [ReadMe](https://github.com/saucelabs/sample-app-web) and get it running locally. The basic steps are:
* Clone the Project
* Use `npm install` to install dependencies
* Start the app with `npm run start`

<img src="assets/TRT2.04A.png" alt="Start local app" width="550"/>

Once you have an app running on your machine, you will need to make changes to your test.

<img src="assets/TRT2.04B.png" alt="App up and running" width="650"/>

### Update the Test URL
Go into the `cypress.json` file to update the `baseURL` that your tests will be running against.

<img src="assets/TRT2.04C.png" alt="App up and running" width="650"/>

Make sure your app is running, **as well as a Sauce Connect tunnel?** then open a new terminal and open your test project file, and start the test

```
cd <your-project file>
saucectl run
```
<img src="assets/TRT2.04D.png" alt="Running Cypress Test" width="650"/>


<!-- ------------------------ -->
## 2.0x Title
Duration: 0:01:00

<!-- ------------------------ -->
## 2.0X Module 2 Quiz
Duration: 0:02:00

![https://docs.google.com/forms/d/e/1FAIpQLScW-Us4yITlZud5PQZBBOY-a7GsSjhcMlzX-6MtVg_FTBJDrw/viewform?embedded=true](https://docs.google.com/forms/d/e/1FAIpQLScW-Us4yITlZud5PQZBBOY-a7GsSjhcMlzX-6MtVg_FTBJDrw/viewform?usp=sf_link)


<!--
1. What

a. You
b. You
c. You
d. You

*Sauce CTL...

2. Why does
a. To
b. To  
c. To
d. Its

*The purpose t.

3. The file ? Choose the answer that is the most correct:

a. The
b. The
c. The
d. The

* The .sauce/config.yml file ...
