This project is created for Sauce Labs using the open source tool created by google in the tools folder inside.
Navigate to tools/README.md to learn more about this tool, how to use it, and get resources

This document will be for documenting sauce_school specific changes and specifications.
<!-- -->
# Setup The Environment

## Local Setup
### 1. Get the Tools
 Install [Golang](https://golang.org/dl/) and [nodeJS and NPM](https://nodejs.org/en/download/) on your computer. [More instructions here](https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)

### 2. Get Claat & Go Env Variables
Download the [claat binary](https://github.com/googlecodelabs/tools/tree/master/claat#install) using the command `go get github.com/googlecodelabs/tools/claat`. When you installed GO on your computer, you should have a folder called go/bin and if you navigate to the folder after installing claat, you should see a claat folder as well..
 [_more detailed instructions can be found here_](https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)

 > Make sure you have the Go environment variables set up so you can run your test. in either `.bash_profile` or `.zshrc`, add the following:

```
## not required if you’re only using Go modules
export GOPATH=$HOME/go
export GOROOT=/usr/local/go
## required
export PATH=$PATH:$HOME/go/bin
```

> For Windows users you will have to set this variable in the [Advanced System Settings](https://docs.oracle.com/en/database/oracle/r-enterprise/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)

You will want to make sure the the path for the `GOROOT` variable does in fact point to where your files are stored. use `cd ..` as many times as you need to get to the very top directory on your system, then `cd usr/local` and check to make sure the `/go` directory is installed there.

### 3. Clone This Repository
Choose where you would like to install sauce-school and either use SSH or HTTPS and install sauce-schools with:

```
git clone <insert copied url here>
```
<img src="assets/Readme_Git_Clone.png">

### 4. Install Gulp
Install node modules in `sauce-school` main folder:
```
npm install
```

Install gulp globally with:
```
npm install --global gulp-cli
```
Find more detailed instructions [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md#install-the-gulp-command-line-utility)


### 5. Project Setup
 The project setup is labeled sauce-school. Within it you should see the directories:
 * `/site`
 * `/codelabs`
 the `codelabs` directory is where module `.md` files are uploaded, and from there, they are exported with the `guplp.js` tool to `/site/codelabs` where the published versions are built.

#### Navigate to the `site` folder:

```
cd site
```

#### Install package dependencies and gulp dependencies in site directory
In order to use claat and gulp, you will need to install the node dependencies in the `site` folder:

```
npm install
```

### 7. Serve it Locally
 To serve it up locally, ensure you are in `site` folder and run the command:

```
gulp serve
```
It will automatically render your markdown files as a static website. Open a browser and type in `localhost:8080` and you should see the codelabs site.

# Publishing with Codelabs in Sauce School

## Access 'Codelabs' or Course files
The course are located in `codelabs` directory. Each course will contain a markdown file for each module by language (which contains several lessons) which is compiled into a directory containing an index.html rendered from the corresponding markdown page.

### 1. Add .md Files to add Courses

[Claat](https://github.com/googlecodelabs/tools) will render an HTML page/ JSON file inside of `site/codelabs`.

*   The `/codelab` directory contains all courses, each with several modules in it.

 Place a markdown file for course modules in a folder called _/site/codelabs_. When you use CLAAT to export it, go to the root golder `sauce-school` and run the command `gulp serve` the markdown files will create directories in the `/site/codelabs` folder which is what is rendered

 * Each Course module `.md.` file is labeled by language and module number (e.g. Module3_SeleniumJS.md).
 * The `tag` at the top of each codelab markdown file identifies the course e.g. java, javascript, python etc.) which are made of many 'modules' with several lessons in it. The codelabs will br grouped together into a course (aka `views`) according to this tag.

  **!IMPORTANT at the top of the .md file , you need to have project information with the id- this is the name of the rendered codelab in `site/build/codelabs`* (see below).

* The `feedback link` is [a G-Form](https://docs.google.com/forms/d/1QKpJDvv64-YXrCPr_unHL-fBAezRnGzqjruLMKC4ssQ/edit?usp=sharing) for people to fill out about bugs/ issues/ questions.

 * Convention, make the .md file use underscores_in_the_name.md and the folder containing that index.html (generated from id in .md file) codelabs files have dashes-in-the-name*

 **Example metadata at the top of `.md` file:**

```
author:Lindsay Walker
summary: Module X of the course X. Learn to write Selenium tests in X programming language with X Test runner and X framework
id: ModiuleX_SeleniumLang
tags: <enter tag names here from /site/app/views/*.json>  
categories: <enter a single category for drop-down filter>
environments: Web
status: Published/ Work in Progress
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: Google Analytics ID

```
#### More on [markdown here](https://docs.google.com/document/d/1C7CunszYBCTAgzwYbDdtHS7yjwLEYQJuvKVC2ff4MZY/edit?usp=sharing)



### 2. Docs to Markdown
When you create a new codelab markdown file from a GDoc, you can use the [Docs to Markdown tool](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607), however there will be some HTML tags at the top you need to delete, as well as title cleanup you need to do
 - Make sure each title has one hash `#` for the course name. Each sub-category ('lesson') should have two hashes in front `##`)
 - Delete any HTML tags, they will screw things up
 - Make sure you delete any random `<p>` tags within the doc, which may have been generated with Docs to Markdown.
 - before each lesson with `##`, above it insert `<!-- ------------------------ -->` to denote a new pages


###  3. Images
Images can mess things up. Make sure you list an image as `assets/imagename.png` withing the markdown file. The assets folder will be at the same level as the markdown page in `/codelabs` (not within a `/codelabs/ModuleX` folder)

### 4. Adding in Elements to .md files
See the template.md file for how to format most items

 * Format for Images `!(Image title)[imageDirInCodelab/Imagename,extension]``
* Format for Links `[Text to be highlighted](URL)`
* Format for iframes `![embed URL](regular URL)`
* Format for YouTube videos:

```
<video id="DWAinkJ54D8"></video>
<video id=""></video>
```
_Video ID can be found in the url for the YouTube video=_

More on how to convert markdown files is [here](https://docs.google.com/document/d/1C7CunszYBCTAgzwYbDdtHS7yjwLEYQJuvKVC2ff4MZY/edit?usp=sharing)

## Optional Setup  – Visual Studio Container
As I was going through the README I wanted to codify my dependencies and task definitions so that I don’t have to refresh myself the next time I contribute to the repository.

### Dependencies:
Docker • https://www.docker.com/products/docker-desktop
Remote Containers Extension • https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

### How to use:
Cmd + Shift + P => type "Reopen in container" ↩
Cmd + Shift + P => type "Run task" ↩ => type "serve" ↩

Reference:
https://code.visualstudio.com/docs/remote/containers
https://code.visualstudio.com/docs/editor/tasks
