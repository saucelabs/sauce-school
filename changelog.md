# Changelog- Add newest additions in an .md file at top
///start typing below this text

## Sept 1 2020 – Lindsay
### Added Museo Sans
Updated files in _tools/site/app/styles_ _materials.scss and _typography.scss to include Museo Sans and sans-serif. May need to further change the _materials.scss to modify font weight, width, spacing etc for h1, h2 etc defined in _typography

###Views & Categories
Views are added in each markdown file at the top located in _tools/site/codelabs_. If you add (only one) item to 'categories:' it will populate in list, though I also added something in the "categories" in _tools/site/app/views/default/view.json_. Note that these categories will all show up lowercase

*Views* Define the separate landing pages that groups of modules (i.e. a course) can have. First, in any markdown files in the _tools/site/codelabs_ add something in the 'tags:' in the header. (i.e. tags:Java). Next, go into the view you want it to appear in _tools/site/app/views/SeleniumJava/view.json_ and add the "tags":[*Java*]. Now the "title":  from that json file will show up _Selenium Java_ and it will appear in the menu that says 'choose your language', and show all .md modules with the Java "tags:" 

## Aug 24, 2020 – Lindsay
### Added Sauce School Info for 'Course' Page
 in _tools/site/app/views/default_ I updated view.json with new title and course description, as well as the same info in index.HTML

 To add links in, in index.html lines 245-257 added in the links to pop up in a new window with href="" target="_blank"

### Created variables for Sauce Color Palatte
in _tools/site/styles/_variables..scss_ created the following variables:
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
in _app/styles/_footer.scss_ changed \#footer {background-color:$pantoneGrey}, .footerbar{background-color: $coolGrey10C10}
