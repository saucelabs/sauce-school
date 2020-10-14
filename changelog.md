# Changelog- Add newest additions in an .md file at top
///start typing below this text

## Oct 13 - Casey's changes (Lindsay)
### Updated navigation in Views
in each of the folder in `site/app/views` before the closing `</div` for the div `id=searchbar` add in `<navigation-element></navigation-element> ` to make the Sauce-style navigation show up on each course page.

All of these styles were created in a new css file in _app/elements/navigation.html_, then injected with Polymer framework into the Codelab course and landing pages.

### Created a task in gulp to overrride styles
To override styles, used gulp to build a css directory/ file in each module folder that is generated with the build
* updated dependencies in package.json `gulp-inline-css`
* created _site_app_styles/_override.scss_

#### Gulpfile.js changes
* ln 43 `require ('gulp-dom')``
* ln 147-161 `created a gulp.task to override modules with CSS`
* ln 259 added `override:modules` to the gulp build task.

## OCT 10 – Casey
### Added navigation element for landing pages
- In _site/app/elements/navigation.html_ you'll find the navigation that mimics the corporate site
- Commented out code in _site/app/views/default/index.html_ and replaced with index cards to page Categories
- Added _site/app/styles/overrides.scss_ to eventually inject into _site/build/codelabes_ course modules to alter css. Built the gulp task. Make sure to create a styles folder when you generate a new codelabs module otherwise the overrides.css doesn't get injected


## Sept 24 – Lindsay
### Added colors & icons to Module Cards
- In _tools/site/app/images_ added in some small images to use as icons as codelab card.
- in _tools/site/app/styles/\_categories.scss_ Added in to the very bottom;

```
@include codelab-card(['beginner'], $pantoneRed, 'magGlass.png');
@include codelab-card(['intermediate'], $pantoneRed, 'seleniumSml.png');
@include codelab-card(['advanced'], $pantoneRed, 'checkSml.png');
```

- Finally, went into _tools/site/images/icons_ and added in the small icons I used in the above code e.g. `seleniuumSml.png`

## Sept 17 2020 – Lindsay
### Updated the markdown/ view files
In each of the markdown files in the `codelabs` directory, I made the tag and categories lowercase. Example from `Module1_SeleniumJS`

```
author:Lindsay
summary: Module 1 of the Selenium Java Test Automation. Learn to write Selenium tests in Java language using the JUnit framework, IntelliJ, and Jenkins.
id: Module1-SeleniumJava
categories: beginner
tags: java  
```

updated the views as well. for `app/views/default/view.json`:
```
"title": "Sauce School Training",
"description": "Sauce School is the training portal for Sauce Labs. The courses here provide how-to tutorials with best practices for both beginners and experienced automation test developers. Courses cover topics including Selenium, JavaScript and Java, with how-tos and instructions on using different tools and test runners such as Mocha, JUnit, Jenkins, Sauce Labs, SauceConnect, SauceOnDemand, npm, Maven, and more.",
"tags": ["java, javascript"],
"categories": ["beginner, intermediate, advanced"],
```

an as an example, for `app/views/seleniumjs/view.json`:

```
"title": "Selenium JavaScript",
"description": "In this course, you will learn to use JavaScript with the Mocha test runner to develop an automated testing suite. Both beginners and advanced testers will create autonomous, easy to maintain test code, and use npm, Jenkins, SauceConnect, and SauceOnDemand along with Selenium, JavaScript, and Mocha to write a test suite and to gain the skills using tools you need as a test automation engineer.",
"logoUrl": "/SeleniumJS/logo.png",
"tags": ["javascript"],
```

### Dropdowns and Categories
Note that none of the modules are showing on the main page, and that the dropdown seems to be picking up the "title" from view.json and not the tag. The URL for each landing page (JS, or Java) seems to contain the name of the folder in `/app/views` e.g. `URL/seleniumjs`

within the Javascript landing page, the categories are being picked up (all were changed to lowercase). also,

## Sept 1 2020 – Lindsay
### Added Museo Sans
Updated files in _tools/site/app/styles_ _materials.scss and _typography.scss to include Museo Sans and sans-serif. May need to further change the _materials.scss to modify font weight, width, spacing etc for h1, h2 etc defined in _typography

### Views & Categories
Views are added in each markdown file at the top located in _tools/site/codelabs_. If you add (only one) item to 'categories:' it will populate in list, though I also added something in the "categories" in _tools/site/app/views/default/view.json_. Note that these categories will all show up lowercase

**Views** Define the separate landing pages that groups of modules (i.e. a course) can have. First, in any markdown files in the _tools/site/codelabs_ add something in the 'tags:' in the header. (i.e. tags:Java). Next, go into the view you want it to appear in _tools/site/app/views/SeleniumJava/view.json_ and add the "tags":[**Java**]. Now the "title":  from that json file will show up _Selenium Java_ and it will appear in the menu that says 'choose your language', and show all .md modules with the Java "tags:"

## Aug 24, 2020 – Lindsay
### Added Sauce School Info for 'Course' Page
 in _tools/site/app/views/default_ I updated view.json with new title and course description, as well as the same info in index.HTML

 To add links in, in index.html lines 245-257 added in the links to pop up in a new window with href="" target="_blank"

### Created variables for Sauce Color Palatte
in _tools/site/styles/variables.scss_ created the following variables:
- $coolGrey10C25 #EDEDEF
- $coolGrey10C10 #C1C3C7
- $pureWhite #FFFFFF
- $pantoneRed #E2231A
- $pantoneGrey #474C55
- $pantoneLightBlue #57C1E8
- $pantoneDarkBlue #003A70

the following variables were also changed:
- $backgroundColor : $coolGrey10C10
- $mainColor: $pantoneRed
- $accentColor: $pantoneDarkBlue

### Added Sauce Logo to Course page and Resized
in _tools/site/app/images/_ replaced logo.png with sauce's logo.png, then in _tools/site/style/_toolbar.scss_ added in .logo-devs{width: 15em; height:auto;},  \#mainToolbar{background-color: $coolGrey10C5}, \#searchbar{background-color:$coolGrey10C10 &hover{background-color:$pantoneGrey}}

### Footer changes
In _app/styles/footer.scss_ changed \#footer {background-color:$pantoneGrey}, .footerbar{background-color: $coolGrey10C10}
