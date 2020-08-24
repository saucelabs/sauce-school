This project is created for Sauce Labs using the open source tool created by google in the tools folder inside.
Navigate to tools/README.md to learn more about this tool, how to use it, and get resources

This document will be for documenting sauce_school specific changes and specifications.
<!-- -->

## Access 'Codelabs' or Course files
The course are located in tools/site/CourseName (e.g. tools/site/SeleniumJS). Each course will contain a markdown file for each module (which contains several lessons) which is compiled into a directory containing an index.html redered from the corresponding markdown page.

## Initial setup
### 1. Get the Tools
 Install Go and nodeJS on your computer, as per [instructions here](https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)

### 2. Get Claat
Download the [claat binary](https://github.com/googlecodelabs/tools/tree/master/claat#install). When you installed GO on your computer, you should have a folder called go/bin and inside that file will be claat.
 [_more detailed instructions can be found here_])(https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)

### 3. Update PATH
 in your ~/.bash_profile add in

```
##Codelabs Path required
export PATH=$PATH:$HOME/go/bin
```

### 4. Project Setup
 The project setup is labeled sauce_school_codelab. Within it you should see the folders tools/site. Inside of /site, you have a separate 'codelabs' directory for each course (this is because each course will have it's own 'codelabs' landing page with several modules.) _?subject to change per design decision_
Once you have the project cloned, go into the site folder and install all the dependencies:

```
## navigate to folder
cd /tools/site
## install gulp dependencies
npm install
npm install -g gulp-cli
```

### 5. Exporting .md to an HTML page using Claat.
<!-- -->
 **!IMPORTANT at the top of the .md file , you need to have project information with the id- this is what your file generated for the codelab will be named. Set it to the same name as your project directory (see below) of your codelab** (see below). Each codelab means a new landing page- each codelab is a course, with several modules in it. Each markdown file is a 'module' with several lessons in it. The 'feedback link' will later be [set to a G-Form](https://docs.google.com/forms/d/1QKpJDvv64-YXrCPr_unHL-fBAezRnGzqjruLMKC4ssQ/edit?usp=sharing) for people to fill out about bugs/ issues/ questions.
 Some examples name of 'codelab' directories include 'site/SeleniumJS' and site/Selenium Java'. Enter the directory for the course, where the codelab is stored. Now run the command `claat export <filename.md>` e.g `claat export Module1_SeleniumJS.md` to export it to a new directory with a .json file and index.html.

 *convention, make the .md file use underscores_in_the_name.md and the id and (generated from id) codelabs files have dashes-in-the-name*

```
summary: Module 1 Introduction to Selenium with JavaScript
id: Module1-SeleniumJS
categories: First draft
tags: Beginner/Intermediate/expert, CourseName, WebDriverType, TestRunnerType, FrameworkType
status: work in progress
authors: Lindsay Walker
Feedback Link: https://docs.google.com/forms/d/1QKpJDvv64-YXrCPr_unHL-fBAezRnGzqjruLMKC4ssQ/edit?usp=sharing
```

### 6. Serve it Locally
 To serve it up locally, (`cd ..` to the course directory first) run `gulp serve --codelabs-dir=<codelab directory name>` e.g. `gulp serve --codelabs-dir=SeleniumJS`

### 7. Docs to Markdown
When you create a new codelab markdown file from a GDoc, you can use the [Docs to Markdown tool](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607), however there will be some HTML tags at the top you need to delete, as well as title cleanup you need to do
 - Make sure each title has one hash `#` for the course name. Each sub-category ('lesson') should have two hashes in front `##`)
 - Delete any HTML tags, they will screw things up
 - Make sure you delete any random `<p>` tags within the doc, which may have been generated with Docs to Markdown.
 - before each lesson with `##`, above it insert `<!-- ------------------------ -->` to denote a new pages
 - Images can mess things up. Make sure you list an image as  imagefolder/imagename.png. The image folder will be at the same level as the markdown page (not within a codelabs folder')

###  8. Images
 Other notes on setup- for images to appear, you need to have an asset folder in the 'codelab' directory where each codelab can pull from (e.g. 'SeleniumJS') Copy and paste the folder **universal assets** in tools/site/universal_assets into the codelab folder and rename that folder **assets** folder (ex- you will have SeleniumJS/assets) You will need to add in the assets unique to that folder to the new assets folder.

### 9. Adding in Elements to .md files
    Format for Images `!(Image title)[imageDirInCodelab/Imagename,extension]``
    Format for Links `[Text to be highlighted](URL)`
    Format for <iframes> `[embed URL](regular URl link)`
    - Get the embed URL and copy the content within src="" like the following: `<iframe src="` **https://docs.google.com/forms/d/e/1FAIpQLSfF6_0V7jEE9JYF4vWDUsHTuYYHnQbaEsMGtfeTcr8arxZgzg/viewform?embedded=true** `" width="640" height="1240" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`

### 10. Adding Dropdowns

Copy and paste this link in the `<head>` of any HTML page:
```
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">.
```

At the top of each HTML page, create this script:
After each HTML button/ div, add in a script (each needs a unique script)
```
<script>
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>
```

Use this within your HTML for the dropdown. You can replace -'Final Code' titles, and 'Note' title within the `<button>` (include H3 tags) and the content within the `<div id="Demo1"`>'. The parameter for each `my function(XXX)` and the `div id=XXX` each need to be unique. E.g. the next one you create will be 'Demo2'

```
<button onclick="myFunction('Demo1')" class="w3-button w3-block w3-left-align">
TITLE</button>
<div id="Demo1" class="w3-container w3-hide">
  <p>CONTENT & IMAGES</p>
</div>

```
