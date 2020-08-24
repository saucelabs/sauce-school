# Changelog- Add newest additions in an .md file at top
///start typing below this text

## Aug 24, 2020 – Lindsay
### Added Sauce School Info for 'Course' Page
 in _tools/site/app/views/default_ I updated view.json with new title and course description, as well as the same info in index.HTML

### Created variables for Sauce Color Palatte
in _tools/site/styles/_variables..scss_ created the following variables:
- $coolGrey!0C5 #EDEDEF
- $coolGrey10C5 #C1C3C7
- $pureWhite #FFFFFF
- $pantoneRed #E2231A
- $pantoneGrey #474C55
- $pantoneLightBlue #57C1E8
- $pantoneDarkBlue #003A70

the following variables were also changed:
- $backgroundColor : $coolGrey10C5
- $mainColor: $pantoneRed
= $accentColor: $pantoneDarkBlue

### Added Sauce Logo to Course page and Resized
in _tools/site/app/images/_ replaced logo.png with sauce's logo.png, then in _tools/site/style/_toolbar.scss_ added in .logo-devs{width: 15em; height:auto;},  \#mainToolbar{background-color: $coolGrey10C5}, \#searchbar{background-color:$coolGrey10C10 &hover{background-color:$pantoneGrey}}

### Footer changes
in _app/styles/_footer.scss_ changed \#footer {background-color:$pantoneGrey}, .footerbar{background-color: $coolGrey10C10}
