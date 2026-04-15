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
    id:"1975BEIRUT04794",date:"1975-04-14",dateDisplay:"April 14, 1975",year:1975,
    classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
    to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1500Z",
    excerpt:"Three new facts about April 13: two gunmen in the 9:30 AM attack were Libyan nationals; an Iraqi-backed faction claimed 18 bus passengers as members; the funeral was deliberately postponed to organize a larger demonstration.",
    tags:["April 1975","Libyan gunmen","Arab Liberation Front","funeral postponed","Syria","Egypt","PLO","Kataeb"],
    topics:["April 13 New Details","Diplomatic Response","International Involvement"],status:"published",
    sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04794_b.html",
    readerNarrative:{headline:"The Day After: Three Details the Record Does Not Carry",subheadline:"This cable documents three specific facts about April 13 that do not appear in the standard historical account: the national identity of two gunmen, the stated membership of bus passengers in an Iraqi-backed faction, and the deliberate postponement of the funeral.",dateline:"Beirut, April 14, 1975",summary:"Filed at 3:00 PM on April 14, this cable contains new information about April 13. Two of the four gunmen in the 9:30 AM attack were Libyan nationals. An Iraqi-backed faction claimed 18 of the 26 bus passengers as its members. The funeral was deliberately postponed in breach of Islamic burial practice to allow time to organize a larger demonstration."}
  },
  {
    id:"1975BEIRUT04829",date:"1975-04-15",dateDisplay:"April 15, 1975",year:1975,
    classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
    to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1200Z",
    excerpt:"80\u201390 dead throughout Lebanon. Three Christian churches bombed in Tripoli. Three non-Phalangist Christian villages near Sidon rocketed and then entered. The Embassy\u2019s own assessment: the casualty balance ran against the Palestinian and Muslim side.",
    tags:["April 1975","Tripoli","Sidon","civilian villages","PLO","Kataeb","Beirut"],
    topics:["Geographic Spread of Violence","Civilian Casualties","PLO Command Structure"],status:"published",
    sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04829_b.html",
    readerNarrative:{headline:"The Second Day: What Spread Beyond Beirut",subheadline:"Three churches bombed in Tripoli. Three non-combatant Christian villages near Sidon rocketed and entered. The Embassy\u2019s own casualty assessment ran against the Palestinian side.",dateline:"Beirut, April 15, 1975",summary:"Less than 48 hours after April 13, 80 to 90 dead throughout Lebanon. Three Christian churches bombed in Tripoli. Three non-Phalangist villages near Sidon rocketed from camps and entered. The Embassy\u2019s own assessment: the casualty balance ran against the Palestinian and Muslim side."}
  },
  {
    id:"1975BEIRUT04860",date:"1975-04-16",dateDisplay:"April 16, 1975",year:1975,
    classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
    to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1000Z",
    excerpt:"Ceasefire negotiations: two suspects delivered as agreed, PLO then demanded seven. An unconfirmed report that Arafat favored a ceasefire for 36 hours while his deputy Abu Iyad opposed it.",
    tags:["ceasefire","April 1975","PLO","Kataeb","Beirut","Arafat","Arab League"],
    topics:["Ceasefire Negotiations","Internal PLO Dynamics","Lebanese Government"],status:"published",
    sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04860_b.html",
    readerNarrative:{headline:"The Ceasefire That Almost Wasn\u2019t",subheadline:"Two suspects delivered as agreed; PLO then demanded seven. An unconfirmed internal PLO command dispute over whether to accept a ceasefire at all.",dateline:"Beirut, April 16, 1975",summary:"The Kataeb delivered two suspects as agreed; the PLO then stated seven were sought. An unconfirmed report: Arafat had favored a ceasefire for 36 hours while his deputy Abu Iyad opposed it. This internal PLO command dispute does not appear in the standard account."}
  }
];

const TIMELINE_EVENTS = [];
const GLOSSARY_TERMS = [];

function classificationBadge(c){var m={CONFIDENTIAL:"badge-confidential",SECRET:"badge-secret",UNCLASSIFIED:"badge-unclassified"};return "<span class=\"classification-badge "+(m[c]||"badge-unclassified")+"\">"+c+"</span>";}
function publishedCables(){return CABLES.filter(function(c){return c.status==="published";});}
