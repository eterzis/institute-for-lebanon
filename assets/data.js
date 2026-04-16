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

function classificationBadge(c){var m={CONFIDENTIAL:'badge-confidential',SECRET:'badge-secret',UNCLASSIFIED:'badge-unclassified'};return '<span class="classification-badge '+(m[c]||'badge-unclassified')+'">'+c+'</span>';}
function publishedCables(){return CABLES.filter(function(c){return c.status==='published';});}

const TIMELINE_EVENTS = [
  {date:"April 30, 1973",isoDate:"1973-04-30",title:"Fatah Bomb Plot at Beirut Airport",desc:"Three Fatah members arrested boarding Air France flight to Paris with 10 kg TNT. BSO threatens to blow up the airport. A 2-kg bomb is found and defused in an airport water cooler. President Frangieh personally orders his minister not to yield to blackmail.",cableId:"1973BEIRUT04974",tags:["Fatah","BSO","airport","pre-war"]},
  {date:"November 3, 1969",isoDate:"1969-11-03",title:"Cairo Agreement — Sovereignty Surrendered",desc:"Under Egyptian pressure, Lebanon grants the PLO the right to maintain armed forces on Lebanese soil and conduct operations across the border into Israel. The agreement effectively exempts Palestinian armed groups from Lebanese law within the refugee camps.",cableId:null,tags:["Cairo Agreement","PLO","sovereignty"]},
  {date:"April 13, 1975 — Morning",isoDate:"1975-04-13",title:"Palestinian Attack on Kataeb Ceremony in Ain el-Rummaneh",desc:"Palestinian gunmen open fire on a crowd attending a church ceremony in Ain el-Rummaneh, killing three Kataeb militia members. This event precedes and precipitates the afternoon bus attack — and is absent from virtually all Western accounts.",cableId:"1975BEIRUT04749",tags:["Ain Ramanneh","Kataeb","April 13"]},
  {date:"April 13, 1975 — Afternoon",isoDate:"1975-04-13",title:"Bus Attack — 26 Killed",desc:"A bus carrying Palestinian passengers through Ain el-Rummaneh is attacked by Kataeb fighters. 26 are killed. The U.S. Embassy specifically notes the bus's presence 'may have been accidental.' This event is widely cited as the sole spark of the civil war.",cableId:"1975BEIRUT04749",tags:["bus attack","Kataeb","April 13"]},
  {date:"April 14, 1975",isoDate:"1975-04-14",title:"New Details: Libyan Gunmen and Iraqi-Backed Faction",desc:"The U.S. Embassy learns two of the four gunmen in the 9:30 AM attack were Libyan nationals. An Iraqi-backed faction claims 18 bus passengers were its members. The funeral is deliberately postponed to organize a larger demonstration.",cableId:"1975BEIRUT04794",tags:["Libyan gunmen","ALF","April 14"]},
  {date:"April 15, 1975",isoDate:"1975-04-15",title:"Violence Spreads — Three Churches Bombed in Tripoli",desc:"80 to 90 dead throughout Lebanon. Three Christian churches bombed in Tripoli. Three non-Phalangist Christian villages near Sidon rocketed from refugee camps and then entered. The Embassy's own assessment: the casualty balance ran against the Palestinian and Muslim side.",cableId:"1975BEIRUT04829",tags:["Tripoli","Sidon","churches","April 15"]},
  {date:"April 16, 1975",isoDate:"1975-04-16",title:"The Ceasefire That Almost Wasn't",desc:"Kataeb delivers two suspects as agreed; PLO then demands seven. An unconfirmed Embassy report: Arafat had favored a ceasefire for 36 hours while his deputy Abu Iyad opposed it — an internal PLO command dispute not in the standard account.",cableId:"1975BEIRUT04860",tags:["ceasefire","Arafat","Abu Iyad"]},
  {date:"January 18, 1976",isoDate:"1976-01-18",title:"Karantina Massacre — PLO and LNM Overrun Christian Enclave",desc:"PLO and Lebanese National Movement forces overrun Karantina, a predominantly Christian and Kurdish enclave near the Beirut port. Hundreds of civilians are killed. The neighborhood is razed. Largely absent from Western accounts.",cableId:null,tags:["Karantina","massacre","1976"]},
  {date:"January 20, 1976",isoDate:"1976-01-20",title:"Damour Massacre — PLO Forces Attack Christian Town",desc:"PLO and LNM forces attack and massacre the civilian population of Damour, a Christian coastal town south of Beirut. Estimates range from 150 to several hundred killed.",cableId:null,tags:["Damour","massacre","1976"]},
  {date:"October 1976",isoDate:"1976-10-01",title:"Riyadh Agreement — Formal Ceasefire",desc:"Arab League summits produce a ceasefire. The Arab Deterrent Force — dominated by Syrian troops — is deployed. The underlying causes of the war remain unresolved.",cableId:null,tags:["ceasefire","Syria","Arab League"]}
];

const GLOSSARY_TERMS = [
  {term:"GOL",full:"Government of Lebanon",def:"The Lebanese national government, typically referring to the cabinet and council of ministers.",category:"Government"},
  {term:"PLO",full:"Palestine Liberation Organization",def:"Umbrella body of Palestinian political and military groups, led from 1969 by Yasser Arafat's Fatah movement.",category:"Organizations"},
  {term:"AMEMBASSY",full:"American Embassy",def:"Standard routing prefix on State Department cables, indicating the message originates from or is addressed to a named U.S. Embassy.",category:"Cable Format"},
  {term:"SECSTATE",full:"Secretary of State",def:"Cables addressed to SECSTATE WASHDC go directly to the State Department in Washington.",category:"Cable Format"},
  {term:"REFTEL",full:"Reference Telegram",def:"Citation to a previously sent cable, identified by its unique alphanumeric identifier.",category:"Cable Format"},
  {term:"NODIS",full:"No Distribution",def:"Handling restriction indicating the cable must not be distributed beyond the immediate addressee.",category:"Cable Format"},
  {term:"NIACT",full:"Night Action — requires immediate attention regardless of local time",def:"The highest urgency designation for diplomatic cables.",category:"Cable Format"},
  {term:"SITREP",full:"Situation Report",def:"Standardized cable format providing a current assessment of conditions during an active crisis.",category:"Cable Format"},
  {term:"RPT",full:"Repeat — used for emphasis",def:"Used to emphasize a word, typically NOT RPT NOT.",category:"Cable Format"},
  {term:"LNM",full:"Lebanese National Movement",def:"Coalition of Lebanese leftist, pan-Arab, and Nasserist parties allied with the PLO. Led by Kamal Jumblatt.",category:"Organizations"},
  {term:"KATAEB",full:"Kataeb Party (Phalange)",def:"Maronite Christian political party and militia founded by Pierre Gemayel in 1936. The largest Maronite armed faction at the outbreak of the civil war.",category:"Organizations"},
  {term:"ADF",full:"Arab Deterrent Force",def:"Peacekeeping force established after the 1976 Riyadh Agreement. Dominated by Syrian troops.",category:"Organizations"},
  {term:"PFLP",full:"Popular Front for the Liberation of Palestine",def:"Marxist-Leninist Palestinian faction founded by George Habash; the second-largest PLO constituent group after Fatah.",category:"Organizations"},
  {term:"DFLP",full:"Democratic Front for the Liberation of Palestine",def:"Breakaway Marxist faction from the PFLP, led by Nayef Hawatmeh.",category:"Organizations"},
  {term:"BSO",full:"Black September Organization",def:"Covert Fatah-linked terrorist unit responsible for the 1972 Munich Olympics massacre. Active in international terrorism while Arafat maintained official distance.",category:"Organizations"},
  {term:"ALF",full:"Arab Liberation Front",def:"Iraqi Ba'ath-sponsored Palestinian faction. Claimed 18 of the April 13 bus passengers as its members (cable 1975BEIRUT04794).",category:"Organizations"},
  {term:"SAIQA",full:"Vanguards of the Popular Liberation War",def:"Syrian-backed Palestinian armed organization operating in Lebanon under Syrian direction.",category:"Organizations"},
  {term:"NLP",full:"National Liberal Party",def:"Maronite political party led by former President Camille Chamoun. Its militia was known as the Tigers.",category:"Organizations"},
  {term:"PSP",full:"Progressive Socialist Party",def:"Druze political party led by Kamal Jumblatt. A key component of the Lebanese National Movement.",category:"Organizations"},
  {term:"FEDAYEEN",full:"Palestinian guerrilla fighters",def:"Arabic: فدائيين ('those who sacrifice themselves'). Refers to Palestinian armed fighters operating from Lebanese territory.",category:"Terminology"},
  {term:"EMBOFF",full:"Embassy Officer",def:"A U.S. Embassy diplomat identified generically to protect source confidentiality.",category:"Cable Format"},
  {term:"POLOFF",full:"Political Officer",def:"Embassy diplomat responsible for political reporting and analysis.",category:"Cable Format"},
  {term:"DCM",full:"Deputy Chief of Mission",def:"Second-ranking diplomat at an embassy, who deputizes for the Ambassador.",category:"Cable Format"},
  {term:"G-2",full:"Military Intelligence Branch (Lebanese Army)",def:"The intelligence arm of the Lebanese Armed Forces.",category:"Organizations"},
  {term:"UNTSO",full:"United Nations Truce Supervision Organization",def:"UN observer mission established 1948 to monitor Israel-Arab armistice agreements. Provided independent source for border patrol activity.",category:"Organizations"},
  {term:"CAIRO AGMT",full:"Cairo Agreement (1969)",def:"The November 1969 agreement granting the PLO the right to maintain armed forces in Lebanon and conduct military operations from Lebanese soil. Widely regarded as the legal basis for the erosion of Lebanese sovereignty.",category:"Key Documents"},
  {term:"NATIONAL PACT",full:"Lebanese National Pact (1943)",def:"Unwritten power-sharing agreement distributing political power along sectarian lines: Maronite President, Sunni Prime Minister, Shia Speaker.",category:"Key Documents"},
  {term:"QTE/UNQTE",full:"Quote / Unquote",def:"Marks direct quotation in teletype transmissions.",category:"Cable Format"}
];
