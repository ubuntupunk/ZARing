// zaring.js is made up of four files - zaring-widget.js, zaring-index.js (this one!), zaring-variables.js, and zaring.css
// it's based on onionring and licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://medialternatives.com/',
'https://medialternatives.com/wiki/',
'https://netbones.co.za/',
'https://muizenmesh.co.za/'
];

//the name of the ring
var ringName = 'ZARing';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'zar-ring';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://medialternatives.com/wiki/zaring/index.html';

//should the widget include a random button?
var useRandom = true;
