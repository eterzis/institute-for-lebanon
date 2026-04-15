const SITE = {name:"Institute for Lebanon",url:"https://instituteforlebanon.com"};

const CABLES = [
  {id:"1973BEIRUT04974",date:"1973-04-30",dateDisplay:"April 30, 1973",year:1973,
   classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
   to:"SECSTATE WASHDC",subject:"Internal Security Developments in Lebanon",
   excerpt:"Two years before the civil war: Fatah members caught at Beirut airport with 10 kg TNT. BSO threatened to blow up the airport. A bomb was found and defused. Lebanese Army G-2: Arafat may have covertly tipped off authorities about a bomb planted by his own movement’s hardliners.",
   tags:["1973","pre-war","Fatah","BSO","Black September","airport bomb","Beirut airport","Shatila"],
   topics:["Pre-War Context","Palestinian Armed Presence","Lebanese Government Firmness"],status:"published",
   sourceUrl:"https://wikileaks.org/plusd/cables/1973BEIRUT04974_b.html",
   readerNarrative:{headline:"The Pattern Before the War: Fatah Bombs, Blackmail, and a President Who Said No",subheadline:"This cable, filed April 30, 1973 \u2014 two years before the civil war \u2014 documents a Fatah bomb plot at Beirut Airport, a Black September bomb threat, and a Lebanese Army intelligence assessment that Arafat may have covertly helped Lebanese authorities defuse a bomb planted by his own movement\u2019s hardliners.",dateline:"Beirut, April 30, 1973",summary:"Two years before the Lebanese Civil War: three Fatah members arrested boarding an Air France flight with 10 kg TNT. Black September threatened to blow up the airport. A 2-kg bomb was found in a water cooler, timed for 2:30 AM. The Lebanese Army G-2 assessed that Arafat may have covertly tipped off Lebanese authorities about the bomb planted by BSO hardliners he could not control. President Frangieh personally ordered his minister not to yield to blackmail."}
  },
  {id:"1975BEIRUT04749",date:"1975-04-14",dateDisplay:"April 14, 1975",year:1975,
   classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
   to:"SECSTATE WASHDC",subject:"Beirut Tense in Aftermath of April 13 Clashes",
   excerpt:"Three separate incidents on April 13. The historical literature records one.",
   tags:["civil war","April 13 1975","Ain Ramanneh","Phalange","Palestinians","Kataeb","Beirut","PLO"],
   topics:["Civil War Origins","April 13 1975"],status:"published",
   sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04749_b.html",
   readerNarrative:{headline:"Three Hours That Started a War",subheadline:"This cable documents three separate incidents at Ain Ramanneh on April 13. The standard account records one.",dateline:"Beirut, April 14, 1975",summary:"Three separate incidents occurred on April 13, 1975. The U.S. Embassy documented all three. The historical literature has consistently identified one as the founding event of Lebanon\u2019s fifteen-year civil war."}
  },
  {id:"1975BEIRUT04794",date:"1975-04-14",dateDisplay:"April 14, 1975",year:1975,
   classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
   to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1500Z",
   excerpt:"Two of the four gunmen in the 9:30 AM attack were Libyan nationals. An Iraqi-backed faction claimed 18 bus passengers as members. The funeral was deliberately postponed.",
   tags:["April 1975","Libyan gunmen","Arab Liberation Front","funeral postponed","Syria","Egypt"],
   topics:["April 13 New Details","Diplomatic Response"],status:"published",
   sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04794_b.html",
   readerNarrative:{headline:"The Day After: Three Details the Record Does Not Carry",subheadline:"Two of the gunmen were Libyan nationals. An Iraqi-backed faction claimed 18 bus passengers. The funeral was deliberately postponed to organize a larger demonstration.",dateline:"Beirut, April 14, 1975",summary:"The afternoon SITREP of April 14: two of the four gunmen in the 9:30 AM attack were Libyan nationals; an Iraqi-backed faction claimed 18 bus passengers as members; the funeral was deliberately postponed in breach of Muslim burial practice."}
  },
  {id:"1975BEIRUT04829",date:"1975-04-15",dateDisplay:"April 15, 1975",year:1975,
   classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
   to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1200Z",
   excerpt:"80\u201390 dead. Three Christian churches bombed in Tripoli. Three non-Phalangist villages near Sidon rocketed and entered. Embassy casualty assessment ran against the Palestinian side.",
   tags:["April 1975","Tripoli","Sidon","civilian villages","PLO","Kataeb","Beirut"],
   topics:["Geographic Spread of Violence","Civilian Casualties"],status:"published",
   sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04829_b.html",
   readerNarrative:{headline:"The Second Day: What Spread Beyond Beirut",subheadline:"Three churches bombed in Tripoli. Three non-Phalangist villages near Sidon rocketed and then entered. The Embassy casualty assessment ran against the Palestinian and Muslim side.",dateline:"Beirut, April 15, 1975",summary:"Less than 48 hours after April 13: 80 to 90 dead throughout Lebanon. Three Christian churches bombed in Tripoli. Three non-Phalangist villages near Sidon rocketed from camps and entered by armed forces."}
  },
  {id:"1975BEIRUT04860",date:"1975-04-16",dateDisplay:"April 16, 1975",year:1975,
   classification:"CONFIDENTIAL",from:"AMEMBASSY BEIRUT",fromFull:"U.S. Embassy, Beirut, Lebanon",
   to:"SECSTATE WASHDC",subject:"Beirut Situation Report \u2014 1000Z",
   excerpt:"Ceasefire negotiations: two suspects delivered, PLO demanded seven. Arafat reportedly favored ceasefire for 36 hours while Abu Iyad opposed it.",
   tags:["ceasefire","April 1975","PLO","Kataeb","Beirut","Arafat","Arab League"],
   topics:["Ceasefire Negotiations","Internal PLO Dynamics"],status:"published",
   sourceUrl:"https://wikileaks.org/plusd/cables/1975BEIRUT04860_b.html",
   readerNarrative:{headline:"The Ceasefire That Almost Wasn\u2019t",subheadline:"Two suspects delivered as agreed; PLO demanded seven. An unconfirmed internal PLO command dispute: Arafat favored ceasefire, Abu Iyad opposed it.",dateline:"Beirut, April 16, 1975",summary:"The Kataeb delivered two suspects as agreed; the PLO demanded seven. An unconfirmed report: Arafat had favored a ceasefire for 36 hours while his deputy Abu Iyad opposed it."}
  }
];

const TIMELINE_EVENTS = [];
const GLOSSARY_TERMS = [];
function classificationBadge(c){var m={CONFIDENTIAL:"badge-confidential",SECRET:"badge-secret",UNCLASSIFIED:"badge-unclassified"};return "<span class=\"classification-badge "+(m[c]||"badge-unclassified")+"\">"+c+"</span>";}
function publishedCables(){return CABLES.filter(function(c){return c.status==="published";});}
