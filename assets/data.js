/**
 * Institute for Lebanon — Shared Data Layer
 * This file is the single source of truth for all cable data,
 * timeline events, and glossary terms across the site.
 *
 * HOW TO ADD A NEW CABLE:
 * 1. Add an object to the CABLES array below
 * 2. Run: python generate.py
 * 3. Commit and push — Cloudflare Pages deploys automatically
 */

const SITE = {
  name:        "Institute for Lebanon",
  tagline:     "Declassified Diplomatic Archive",
  url:         "https://instituteforlebanon.com",
  description: "A scholarly archive of declassified U.S. State Department diplomatic cables on Lebanon's history, its civil conflict, and its relationship with Palestinian armed groups — annotated and contextualized for scholars and the public.",
  contact:     "contact@instituteforlebanon.com",
  updated:     new Date().toISOString().split('T')[0]
};

// ─────────────────────────────────────────────────────────────────────────────
// CABLES
// Add new cables here. The generator will create /cables/{id}/index.html
// for each entry with status: "published".
// ─────────────────────────────────────────────────────────────────────────────
const CABLES = [
  {
    id:             "1975BEIRUT04749",
    date:           "1975-04-13",         // ISO date — exact date to confirm from cable
    dateDisplay:    "April 1975",
    year:           1975,
    classification: "CONFIDENTIAL",
    from:           "AMEMBASSY BEIRUT",
    fromFull:       "U.S. Embassy, Beirut, Lebanon",
    to:             "SECSTATE WASHDC",
    toFull:         "Secretary of State, Washington D.C.",
    subject:        "[Awaiting Document — Paste Cable Text to Begin]",
    excerpt:        "This entry is reserved for cable 1975BEIRUT04749. Paste the raw cable text to begin annotation. The first cable in the archive will document events from the critical opening weeks of the Lebanese Civil War.",
    tags:           ["civil war", "Beirut", "1975", "PLO", "Kataeb"],
    topics:         ["Civil War Origins", "Palestinian Armed Presence", "Lebanese Factions"],
    status:         "pending",
    sourceUrl:      "https://wikileaks.org/plusd/cables/1975BEIRUT04749_b.html",
    refs:           [],
    persons:        [],
    organizations:  [],
    locations:      ["Beirut", "Lebanon"],
    annotatedBody:  null,
    rawBody:        null,
    footnotes:      [],
    glossary:       [],
    relatedCables:  []
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE EVENTS
// ─────────────────────────────────────────────────────────────────────────────
const TIMELINE_EVENTS = [
  {
    date:     "November 3, 1969",
    isoDate:  "1969-11-03",
    title:    "Cairo Agreement — Sovereignty Surrendered",
    desc:     "Under Egyptian pressure, Lebanon's government grants the PLO the right to maintain armed forces on Lebanese soil and conduct military operations across the border into Israel. The agreement effectively exempts Palestinian armed groups from Lebanese law within the refugee camps. Lebanese critics across the political spectrum — and much of the Lebanese Army officer corps — regard it as a fatal wound to state sovereignty, transforming Lebanon into a staging ground for a conflict not of its own making. The agreement is never ratified by the Lebanese parliament.",
    cableId:  null,
    tags:     ["Cairo Agreement", "PLO", "sovereignty", "1969"]
  },
  {
    date:     "1970–1975",
    isoDate:  "1970-01-01",
    title:    "PLO Cross-Border Operations and Israeli Reprisals Against Lebanon",
    desc:     "Palestinian armed factions, operating under the protection of the Cairo Agreement, conduct repeated raids and rocket attacks into northern Israel from Lebanese territory. The Israeli military responds with air strikes, artillery bombardments, and ground operations that devastate Lebanese Shia villages in the south, displacing tens of thousands of civilians northward into Beirut. The Lebanese state, paralyzed by sectarian politics and lacking the military capacity to control the PLO, absorbs the consequences of a war it did not choose. Resentment of the Palestinian armed presence deepens across Lebanese communities of all sects.",
    cableId:  null,
    tags:     ["PLO", "Israeli reprisals", "southern Lebanon", "displacement"]
  },
  {
    date:     "April 13, 1975 — Morning",
    isoDate:  "1975-04-13",
    title:    "Palestinian Gunmen Attack Kataeb Church Ceremony in Ain el-Rummaneh",
    desc:     "Palestinian gunmen open fire on a crowd attending a church inauguration ceremony in the Ain el-Rummaneh neighborhood of Beirut. The attack targets members of the Kataeb (Phalange) party, killing several including bodyguards of party leader Pierre Gemayel. The incident does not occur in a vacuum: it follows months of escalating armed clashes between Palestinian forces and Kataeb fighters in Beirut's suburbs. This attack is the proximate trigger for the events that follow later the same day — yet it is systematically absent from most Western accounts, which begin the narrative of April 13 only with the afternoon's bus incident.",
    cableId:  null,
    tags:     ["Ain el-Rummaneh", "Kataeb", "PLO", "attack", "April 13"]
  },
  {
    date:     "April 13, 1975 — Afternoon",
    isoDate:  "1975-04-13",
    title:    "Kataeb Retaliatory Attack on Bus Carrying Palestinian Passengers",
    desc:     "Hours after the morning attack on the Kataeb church ceremony, Kataeb fighters stop a bus carrying Palestinian passengers through Ain el-Rummaneh and open fire, killing approximately 27 people. This incident is almost universally presented in Western media and scholarship as the sole spark of the civil war, stripped of the morning's preceding attack. Together, the two incidents of April 13 mark the point at which political violence in Lebanon becomes sustained, organized, and communal — though the structural causes run back years, to the Cairo Agreement and the collapse of Lebanese state authority over its own territory.",
    cableId:  null,
    tags:     ["Ain el-Rummaneh", "Kataeb", "bus attack", "April 13"]
  },
  {
    date:     "April–September 1975",
    isoDate:  "1975-04-14",
    title:    "First Phase of the Civil War",
    desc:     "Fighting spreads across Beirut and the surrounding mountains. The Lebanese Army, torn by sectarian loyalties and lacking clear political direction from a paralyzed government, remains largely on the sidelines. Multiple ceasefires are brokered and collapse within days. The National Pact — Lebanon's unwritten sectarian power-sharing formula since independence — proves unable to contain or channel the violence. Each side consolidates territory; the geography of Beirut begins to fracture.",
    cableId:  null,
    tags:     ["civil war", "ceasefire", "Lebanese Army", "1975"]
  },
  {
    date:     "September–October 1975",
    isoDate:  "1975-09-01",
    title:    "'Hotel War' — Destruction of Downtown Beirut",
    desc:     "Battles for control of Beirut's landmark downtown hotels — used as sniper nests, command posts, and artillery platforms — devastate the commercial and cultural heart of the city. The fighting accelerates the physical partition of Beirut into Christian East and Muslim-Palestinian West sectors along what will become the Green Line: a front that will remain in place for fifteen years.",
    cableId:  null,
    tags:     ["Hotel War", "Green Line", "Beirut", "1975"]
  },
  {
    date:     "January 18, 1976",
    isoDate:  "1976-01-18",
    title:    "PLO and LNM Forces Overrun Karantina — Massacre of Civilians",
    desc:     "Palestinian and Lebanese National Movement (LNM) forces overrun Karantina, a predominantly Christian and Kurdish working-class enclave in East Beirut near the port. Hundreds of civilians are killed in what survivors and contemporaneous accounts describe as a massacre; the neighborhood is razed. The attack is among the most significant atrocities of the civil war's early phase. It receives substantially less attention in standard Western accounts than Maronite violence during the same period.",
    cableId:  null,
    tags:     ["Karantina", "massacre", "PLO", "LNM", "1976"]
  },
  {
    date:     "January 20, 1976",
    isoDate:  "1976-01-20",
    title:    "PLO and LNM Forces Attack and Massacre Damour — Christian Coastal Town",
    desc:     "Two days after Karantina, PLO and LNM forces attack Damour, a Christian coastal town south of Beirut. The town's fighters and many civilians attempt to evacuate by sea; those who remain are killed. Estimates of the death toll range from 150 to several hundred. Survivors are expelled and the town pillaged. Like Karantina, Damour is a massacre of civilians; unlike Karantina, it is rarely labeled as such in Western scholarship. Both massacres must be understood as part of the same cycle of sectarian violence.",
    cableId:  null,
    tags:     ["Damour", "massacre", "PLO", "LNM", "Christians", "1976"]
  },
  {
    date:     "March 1976",
    isoDate:  "1976-03-01",
    title:    "Lebanese Army Fragments — Ahdab Coup and the Lebanese Arab Army",
    desc:     "Sections of the Lebanese Army, led by officers sympathetic to the Palestinian-LNM alliance, mutiny and form the breakaway 'Lebanese Arab Army' under Brigadier Ahmad al-Khatib. Separately, Brigadier Aziz al-Ahdab stages a televised coup demand, calling for President Suleiman Frangieh's resignation. Neither effort reshapes political authority, but the army's fragmentation removes the last institutional buffer separating Lebanon's militias from one another. The state effectively ceases to function as a monopoly of force.",
    cableId:  null,
    tags:     ["Lebanese Army", "Ahdab", "coup", "1976"]
  },
  {
    date:     "June 1976",
    isoDate:  "1976-06-01",
    title:    "Syrian Military Intervention",
    desc:     "Syrian forces enter Lebanon in force, ostensibly to prevent a PLO-LNM military victory over Maronite factions — a victory Damascus fears would trigger Israeli intervention and undermine Syrian strategic interests in Lebanon. Syria's intervention is initially welcomed by Maronite leaders but viewed with deep alarm by the PLO, its Lebanese allies, and Arab nationalist opinion. Damascus will subsequently shift alliances multiple times over the following decade, demonstrating consistently that Syrian involvement serves Syrian state interests above Lebanese ones.",
    cableId:  null,
    tags:     ["Syria", "intervention", "PLO", "1976"]
  },
  {
    date:     "October 1976",
    isoDate:  "1976-10-01",
    title:    "Riyadh and Cairo Summits — Ceasefire and Arab Deterrent Force",
    desc:     "Arab League summits in Riyadh and Cairo produce a ceasefire agreement and establish the Arab Deterrent Force (ADF) to supervise it. The ADF is composed overwhelmingly of Syrian troops, effectively legitimizing Syria's military presence in Lebanon under an Arab League mandate. The ceasefire largely silences the guns — but every underlying cause of the war remains unresolved: the Cairo Agreement's grant of armed Palestinian autonomy on Lebanese soil, Lebanon's sectarian political paralysis, unchecked militia power, and the absence of a functioning Lebanese state authority.",
    cableId:  null,
    tags:     ["Riyadh Agreement", "Arab Deterrent Force", "ceasefire", "Syria", "1976"]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GLOSSARY
// ─────────────────────────────────────────────────────────────────────────────
const GLOSSARY_TERMS = [
  { term:"GOL",        full:"Government of Lebanon",                          def:"The Lebanese national government, typically referring to the cabinet and council of ministers. Used throughout State Department cables as shorthand for official Lebanese state authority.",                                category:"Government" },
  { term:"PLO",        full:"Palestine Liberation Organization",              def:"Umbrella body of Palestinian political and military groups, founded in 1964 and led from 1969 by Yasser Arafat's Fatah movement. The PLO maintained a substantial armed presence in Lebanon following the 1969 Cairo Agreement.",                    category:"Organizations" },
  { term:"AMEMBASSY",  full:"American Embassy",                               def:"Standard routing prefix on State Department cables, indicating the message originates from or is addressed to a named U.S. Embassy.",                                                                               category:"Cable Format" },
  { term:"SECSTATE",   full:"Secretary of State",                             def:"The U.S. Secretary of State; cables addressed to SECSTATE WASHDC go directly to the State Department in Washington.",                                                                                             category:"Cable Format" },
  { term:"WASHDC",     full:"Washington, D.C.",                               def:"Standard cable abbreviation for the U.S. capital, used in routing headers.",                                                                                                                                     category:"Cable Format" },
  { term:"REFTEL",     full:"Reference Telegram",                             def:"Citation to a previously sent cable, identified by its unique alphanumeric identifier (e.g., REFTEL: 1975BEIRUT04200). Used to establish continuity between dispatches.",                                          category:"Cable Format" },
  { term:"NODIS",      full:"No Distribution",                                def:"Handling restriction indicating the cable must not be distributed beyond the immediate addressee. Highest-sensitivity classification for operational or policy content.",                                           category:"Cable Format" },
  { term:"EXDIS",      full:"Exclusive Distribution",                         def:"Restricted distribution — the cable is to be seen only by a specified list of senior officials. More restrictive than standard distribution but less than NODIS.",                                               category:"Cable Format" },
  { term:"LIMDIS",     full:"Limited Distribution",                           def:"Cable to be distributed only within the embassy or specified offices. Intermediate restriction level.",                                                                                                           category:"Cable Format" },
  { term:"LNM",        full:"Lebanese National Movement",                     def:"Coalition of Lebanese leftist, pan-Arab, Nasserist, and progressive parties that allied with the PLO during the civil war. Led principally by Druze chieftain Kamal Jumblatt. The LNM and PLO formed the dominant military force opposing the Kataeb and allied Maronite militias.",                          category:"Organizations" },
  { term:"KATAEB",     full:"Kataeb Party (Phalange)",                       def:"Maronite Christian political party and militia founded by Pierre Gemayel in 1936, modeled partly on European nationalist movements. The Kataeb (also spelled Kata'ib) was the largest and best-organized Maronite armed faction at the outbreak of the civil war.",                                                category:"Organizations" },
  { term:"ADF",        full:"Arab Deterrent Force",                           def:"Peacekeeping force established by the Arab League after the 1976 Riyadh Agreement. Dominated numerically by Syrian troops, the ADF effectively legitimized Syria's military presence in Lebanon under an Arab mandate.",                                                                                       category:"Organizations" },
  { term:"PLA",        full:"Palestine Liberation Army",                      def:"Conventional military arm of the PLO, organized into regular brigades stationed in various Arab countries, including Syria, Egypt, and Iraq. Distinct from the PLO's fedayeen (guerrilla) units.",              category:"Organizations" },
  { term:"PFLP",       full:"Popular Front for the Liberation of Palestine",  def:"Marxist-Leninist Palestinian faction founded by George Habash; the second-largest PLO constituent group after Fatah. Conducted international operations including aircraft hijackings in the late 1960s and early 1970s.",                                                                                       category:"Organizations" },
  { term:"DFLP",       full:"Democratic Front for the Liberation of Palestine", def:"Breakaway Marxist faction from the PFLP, led by Nayef Hawatmeh. Advocated for Palestinian-Israeli coexistence under a democratic state — a minority position within the PLO.",                              category:"Organizations" },
  { term:"NLP",        full:"National Liberal Party",                         def:"Maronite political party led by former Lebanese President Camille Chamoun. Maintained its own militia, the 'Tigers' (Numur), which fought alongside the Kataeb.",                                               category:"Organizations" },
  { term:"EMBOFF",     full:"Embassy Officer",                                def:"A U.S. Embassy diplomat, identified generically to protect source confidentiality. 'EMBOFF met with...' indicates an embassy official conducted a meeting whose specific identity is withheld.",                  category:"Cable Format" },
  { term:"POLOFF",     full:"Political Officer",                              def:"The embassy diplomat responsible for political reporting and analysis. Typically a Foreign Service officer with expertise in the host country's domestic politics.",                                               category:"Cable Format" },
  { term:"DCM",        full:"Deputy Chief of Mission",                        def:"The second-ranking diplomat at an embassy, who deputizes for the Ambassador and is responsible for day-to-day embassy operations.",                                                                                category:"Cable Format" },
  { term:"CAIRO AGMT", full:"Cairo Agreement (1969)",                         def:"The November 1969 agreement brokered by Egypt between the Lebanese government and the PLO, granting the PLO the right to maintain armed forces in Lebanon and to conduct military operations from Lebanese soil. Widely regarded in Lebanon as the legal basis for the erosion of Lebanese sovereignty.",         category:"Key Documents" },
  { term:"FEDAYEEN",   full:"Palestinian Guerrilla Fighters (Arabic: فدائيين)", def:"Arabic term meaning 'those who sacrifice themselves.' Used in cables to refer to Palestinian armed fighters, particularly those operating from Lebanese territory. The term carries both political and military connotations.",                                                                               category:"Terminology" },
  { term:"NATIONAL PACT", full:"Lebanese National Pact (1943)",               def:"An unwritten gentleman's agreement between Lebanon's Maronite and Sunni Muslim communities at independence, distributing political power along sectarian lines. The Pact allocated the presidency to a Maronite, the premiership to a Sunni, and the speakership of parliament to a Shia. Its legitimacy was contested throughout the civil war.",  category:"Key Documents" },
  { term:"REF",        full:"Refugees",                                       def:"In cables from this period, typically refers to Palestinian refugees in Lebanon. By 1975, Lebanon hosted approximately 300,000–350,000 registered Palestinian refugees, concentrated in camps in Beirut, Tyre, Sidon, and the north.",                                                                          category:"Terminology" },
  { term:"SEPTEL",     full:"Separate Telegram",                              def:"Indicates that additional relevant information is being sent under a separate cable, often with different distribution restrictions.",                                                                             category:"Cable Format" }
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

function classificationBadge(c) {
  const map = {
    CONFIDENTIAL: 'badge-confidential',
    SECRET:       'badge-secret',
    UNCLASSIFIED: 'badge-unclassified'
  };
  return `<span class="classification-badge ${map[c] || 'badge-unclassified'}">${c}</span>`;
}

function formatDate(isoDate) {
  if (!isoDate || isoDate.length === 4) return isoDate;
  try {
    return new Date(isoDate + 'T00:00:00').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  } catch { return isoDate; }
}

function publishedCables() {
  return CABLES.filter(c => c.status === 'published');
}

function pendingCables() {
  return CABLES.filter(c => c.status === 'pending');
}
