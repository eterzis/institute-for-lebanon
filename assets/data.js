const SITE = {name:"Institute for Lebanon",url:"https://instituteforlebanon.com"};

const CABLES = [
  {
    id:"1975BEIRUT04749",date:"1975-04-14",dateDisplay:"April 14, 1975",year:1975,
    classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
    to:"SECSTATE WASHDC",subject:"Beirut Tense in Aftermath of April 13 Clashes",
    excerpt:"Three separate incidents occurred on April 13, 1975 in Ain el-Rummaneh. The U.S. Embassy documented all three. The historical literature has documented one.",
    tags:["civil war","April 13 1975","Ain Ramanneh","Phalange","Palestinians","Kataeb","Beirut","PLO"],
    topics:["Civil War Origins","April 13 1975","Palestinian Armed Presence"],status:"published",
    sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04749_b.html",
    readerNarrative:{headline:"Three Hours That Started a War",subheadline:"This cable documents three separate violent incidents at the same location on April 13. The historical literature has consistently recorded one.",dateline:"Beirut, April 14, 1975",summary:"Three separate incidents occurred on April 13, 1975, in the Ain el-Rummaneh suburb of Beirut. The U.S. Embassy documented all three. The historical literature has consistently identified one of these incidents as the founding event of Lebanon\u2019s fifteen-year civil war."}
  },
  {
    id:"1975BEIRUT04829",date:"1975-04-15",dateDisplay:"April 15, 1975",year:1975,
    classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
    to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1200Z",
    excerpt:"A two-section situation report filed at noon on April 15, documenting 80\u201390 dead throughout Lebanon, three Christian churches bombed in Tripoli, three non-Phalangist Christian villages near Sidon rocketed from camps and then entered.",
    tags:["April 1975","Tripoli","Sidon","civilian villages","PLO","Kataeb","Beirut"],
    topics:["Geographic Spread of Violence","Civilian Casualties","PLO Command Structure"],status:"published",
    sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04829_b.html",
    readerNarrative:{headline:"The Second Day: What Spread Beyond Beirut",subheadline:"This cable documents how the violence of April 13 spread beyond Beirut within 48 hours. Three churches were bombed in Tripoli. Three non-combatant Christian villages near Sidon were rocketed and then entered.",dateline:"Beirut, April 15, 1975",summary:"Less than 48 hours after April 13, the Embassy filed this two-section situation report. 80 to 90 dead throughout Lebanon. Three Christian churches bombed in Tripoli. Three non-Phalangist villages near Sidon rocketed from camps. The Embassy\u2019s own assessment: the casualty balance ran against the Palestinian and Muslim side."}
  },
  {
    id:"1975BEIRUT04860",date:"1975-04-16",dateDisplay:"April 16, 1975",year:1975,
    classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
    to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1000Z",
    excerpt:"A situation report documenting the ceasefire negotiations: two suspects delivered as agreed, PLO then demanded seven. An unconfirmed Embassy report that Arafat favored a ceasefire for 36 hours while his deputy Abu Iyad opposed it.",
    tags:["ceasefire","April 1975","PLO","Kataeb","Beirut","Arafat","Arab League"],
    topics:["Ceasefire Negotiations","Internal PLO Dynamics","Lebanese Government"],status:"published",
    sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04860_b.html",
    readerNarrative:{headline:"The Ceasefire That Almost Wasn\u2019t",subheadline:"This cable documents the ceasefire negotiations that followed April 13. Two facts not in the standard account: a documented asymmetry in suspect demands, and an unconfirmed report of a command dispute within PLO leadership.",dateline:"Beirut, April 16, 1975",summary:"Three days after April 13, the Embassy filed this situation report. The Kataeb delivered two suspects as agreed; the PLO then stated seven were sought. An unconfirmed report: Arafat had favored a ceasefire for 36 hours while his deputy Abu Iyad opposed it."}
  }
];

const TIMELINE_EVENTS = [];
const GLOSSARY_TERMS = [];

function classificationBadge(c){const m={CONFIDENTIAL:'badge-confidential',SECRET:'badge-secret',UNCLASSIFIED:'badge-unclassified'};return '<span class="classification-badge '+(m[c]||'badge-unclassified')+'">'+c+'</span>';}
function publishedCables(){return CABLES.filter(c=>c.status==='published');}
