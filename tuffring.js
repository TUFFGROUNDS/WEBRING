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

   
