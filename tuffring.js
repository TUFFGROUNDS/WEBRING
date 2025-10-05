(function () {
 // ####### CONFIGURATION AREA #######
 const tuffring_configurationsettings = {
     tuffring_uniqueRingID: "",               // Choose a unique ring-id
  tuffring_WebRingTitle: "",                 // This is the title that might get displayed within the webring widget
 tuffring_WebRingSeparatorId: "",            // 
      
   // ###### ADD OR REMOVE WEB RING MEMBERS #####
 tuffring_WebRingMemberSites: [             // You have to add or remove sites here that are or aren't members of the webring
 "https://domain.com/",
   "https://domain.com/",
  "https://domain.org/",
   "https://domain.com/",
  "https://domain.com/",
 "https://domain.org/",
   "https://dommain.com/"
    ],   
    
       tuffring_enablePrevAndNextLinks: true,    // true if you want to show previous and next weblinks
tuffring_enableRandomLink: true,                // true if you want a random link that points to a random site 
  tuffring_enableIndexLinkListingsPage: true,   // true if you want to display a link to your index page (you have to specify the url below)
 tuffring_enableJoinHyperlink: true,            // true if you want to show a link for interested webmasters that links to your join the webring page
tuffring_enableHardcodedCreditLink: true,      // true if you want to force the webring widget to show a link to your credits page
tuffring_enableLinkToScriptSource: true,         // true if you want to display a link to this github and source code

tuffring_RingMembersIndexPageURL: "https://",
   tuffring_LinkToJoinPageURL: "https://",
   tuffring_ScriptSourceURL: "https://",
   
 tuffring_show_favIcon_ringnavi: true,
tuffring_shuffle_PrevNext_Links: true,
 tuffring_Favicon404FallbackURL: "./favicon.ico",
     
tuffring_defaultStyleScheme: "auto"
  };

      const tuffring_DockingId = `${tuffring_configurationsettings.tuffring_WebRingSeparatorId}-${tuffring_configurationsettings.tuffring_uniqueRingID}`;
      const tuffring_MembersListIdent = `${tuffring_DockingId}-members`;

 const GetCur420URL = window.location.href;
    const cur_MemberIndex = tuffring_configurationsettings.tuffring_WebRingMemberSites.findIndex(site =>
       GetCur420URL.startsWith(site)
);

    let ThrowDiceToTheLeft = 0;
          let ThrowDiceToTheRight = 0;
          if (cur_MemberIndex !== -1) {
            
   ThrowDiceToTheLeft = cur_MemberIndex === 0
    ? tuffring_configurationsettings.tuffring_WebRingMemberSites.length - 1
 : cur_MemberIndex - 1;

ThrowDiceToTheRight = cur_MemberIndex === tuffring_configurationsettings.tuffring_WebRingMemberSites.length - 1
  ? 0
  : cur_MemberIndex + 1;

          }
const RandomRingSpin = () => {
  if (cur_MemberIndex === -1) {
const randIdx = Math.floor(Math.random() * tuffring_configurationsettings.tuffring_WebRingMemberSites.length);
    window.location.href = tuffring_configurationsettings.tuffring_WebRingMemberSites[randIdx];
      } else {
 const others = tuffring_configurationsettings.tuffring_WebRingMemberSites.filter((_, i) => i !== cur_MemberIndex);
 const randomPick = others[Math.floor(Math.random() * others.length)];
  window.location.href = randomPick;
 }
};
   
function getFaviconHTML(url) {
try {
 const parsed = new URL(url);
 const ico = `${parsed.origin}/favicon.ico`;
return `<img src="${ico}" class="favIcon" width="16" height="16" onerror="this.onerror=null;this.src='${tuffring_configurationsettings.tuffring_Favicon404FallbackURL}';" alt="favicon">`;
 } catch (e) {
  return `<img src="${tuffring_configurationsettings.tuffring_Favicon404FallbackURL}" class="favIcon" width="16" height="16" alt="favicon">`;
}
}



// styleMEOW unfinished part
const style = `
 ${themeBlock}
   #${tuffring_DockingId}, #${tuffring_MembersListIdent} {
    margin: 0 auto;
   padding: 15px;
  font-family: system-ui, sans-serif;
 font-size: 14px;
  border-radius: 8px;
 max-width: 600px;
  }
   #${tuffring_DockingId} table {
   margin: 0 auto;
    width: 100%;
  border-spacing: 0;
}
    #${tuffring_DockingId} td {
padding: 10px;
}
  .${tuffring_configurationsettings.tuffring_uniqueRingID}-prev { text-align: right; }
.${tuffring_configurationsettings.tuffring_uniqueRingID}-info { text-align: center; }
.${tuffring_configurationsettings.tuffring_uniqueRingID}-next { text-align: left; }
 .${tuffring_configurationsettings.tuffring_uniqueRingID}-links { font-size: small; }

.${tuffring_configurationsettings.tuffring_uniqueRingID}-footer {
  text-align: center;
font-size: 12px;
 margin-top: 10px;
  opacity: 0.7;
}
 #${tuffring_MembersListIdent} ul {
 list-style: none;
padding-left: 0;
text-align: center;
}
 #${tuffring_MembersListIdent} li {
margin-bottom: 6px;
}
img.favIcon {
 width: 16px;
height: 16px;
 vertical-align: middle;
    margin-right: 4px;
}
 `;
const styleTag = document.createElement("style");
 styleTag.textContent = style;
document.head.appendChild(styleTag);


 // restruc syntax b4


  const DefaultThemeX = tuffring_configurationsettings.tuffring_defaultStyleScheme;

  const LightBrightModeTheme = `
    #${tuffring_DockingId}, #${tuffring_MembersListIdent} {
      background: #fefefe;
      color: #202020;
      border: 1px solid #ddd;
    }
    #${tuffring_DockingId} a { color: #1a73e8; }
    #${tuffring_DockingId} a:visited { color: #6a1b9a; }
  `;

  const DarkModeTheme = `
    #${tuffring_DockingId}, #${tuffring_MembersListIdent} {
      background: #121212;
      color: #e0e0e0;
      border: 1px solid #333;
    }
    #${tuffring_DockingId} a { color: #8ab4f8; }
    #${tuffring_DockingId} a:visited { color: #c792ea; }
  `;

  let themeBlock = "";

  if (DefaultThemeX === "light") {
    themeBlock = LightBrightModeTheme;
  } else if (DefaultThemeX === "dark") {
    themeBlock = DarkModeTheme;
  } else {
    // auto = system preference
    themeBlock = `
      @media (prefers-color-scheme: dark) { ${DarkModeTheme} }
      @media (prefers-color-scheme: light) { ${LightBrightModeTheme} }
    `;
  }
