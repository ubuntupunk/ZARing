// zaring.js is made up of four files - zaring-widget.js, zaring-index.js (this one!), zaring-variables.js, and zaring.css
// it's based on onionring and licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ZAR-RING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
regex = /^https:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes

list = "";
for (i = 0; i < sites.length; i++) {
  list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
}

tag.insertAdjacentHTML('afterbegin', `
<ul>
${list}
</ul>
`);
