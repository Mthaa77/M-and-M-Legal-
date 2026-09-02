export interface PracticeArea {
  id: string;
  title: string;
  band: 'business' | 'property' | 'people' | 'culture';
  shortDesc: string;
  fullDesc: string;
  keyActs: string[];
  capabilities: string[];
  typicalClients: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface PracticeBandInfo {
  id: 'business' | 'property' | 'people' | 'culture';
  title: string;
  subtitle: string;
  tagline: string;
  accentColor: string;
  practiceAreas: string[];
}

export const PRACTICE_BANDS: Record<string, PracticeBandInfo> = {
  business: {
    id: 'business',
    title: 'Business & Institutions',
    subtitle: 'Litigation, Labour, Procurement & Corporate Governance',
    tagline: 'Strategic counsel defending enterprise value and statutory compliance.',
    accentColor: '#C5A46D',
    practiceAreas: ['commercial-litigation', 'labour-law', 'procurement-governance', 'competition-law']
  },
  property: {
    id: 'property',
    title: 'Property & Legacy',
    subtitle: 'Conveyancing, Developments, Trusts & Estates',
    tagline: 'Securing land rights, generational wealth, and corporate assets.',
    accentColor: '#DFCA9B',
    practiceAreas: ['property-conveyancing', 'trusts-estates', 'corporate-assets']
  },
  people: {
    id: 'people',
    title: 'People & Protection',
    subtitle: 'Family Law, Human Rights & Personal Injury',
    tagline: 'Empathetic, rigorous representation when personal well-being is at stake.',
    accentColor: '#8E99A8',
    practiceAreas: ['family-law', 'human-rights', 'personal-injury']
  },
  culture: {
    id: 'culture',
    title: 'Culture & Innovation',
    subtitle: 'Sports, Media, Entertainment & Technology Law',
    tagline: 'Protecting intellectual property, talent agreements, and digital infrastructure.',
    accentColor: '#C5A46D',
    practiceAreas: ['sports-media', 'technology-telecoms']
  }
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'commercial-litigation',
    title: 'Commercial & General Litigation',
    band: 'business',
    shortDesc: 'Resolving contractual breaches, shareholder disputes, debt recovery, and high-stakes commercial disputes in the High Court and Magistrates Courts.',
    fullDesc: 'Commercial disputes demand rapid tactical intervention paired with deep commercial foresight. M&M Legal represents corporate clients, state entities, and entrepreneurs in complex contractual disputes, urgent interdicts, liquidation and business rescue applications, and arbitration proceedings throughout South Africa.',
    keyActs: ['Companies Act 71 of 2008', 'Uniform Rules of Court', 'Arbitration Act 42 of 1965', 'National Credit Act 34 of 2005'],
    capabilities: [
      'Urgent High Court Interdicts & Spoliation Applications',
      'Contractual Breach & Enforcement Proceedings',
      'Shareholder, Partnership & Director Disputes',
      'Commercial Debt Recovery & Asset Attachment',
      'Insolvency, Liquidation & Business Rescue Advisory',
      'Alternative Dispute Resolution (ADR) & Mediation'
    ],
    typicalClients: ['Corporate enterprises', 'Commercial landlords & tenants', 'Financial institutions', 'SME founders'],
    processSteps: [
      { title: 'Case Assessment & Merit Review', desc: 'Evaluating contractual clauses, evidence chain, and financial exposure.' },
      { title: 'Pre-Litigation Demand & Strategy', desc: 'Issuing formal letters of demand and exploring commercial settlement avenues.' },
      { title: 'Court Pleadings & Interdict Filings', desc: 'Drafting high-precision founding affidavits and instituting legal action.' },
      { title: 'Trial Representation & Enforcement', desc: 'Advocacy before the High Court and executing warrants of execution.' }
    ],
    faqs: [
      { q: 'How quickly can M&M Legal obtain an urgent interdict in the High Court?', a: 'When genuine urgency is proven (such as imminent asset dissipation or severe unlawful harm), our litigation team can draft, file, and serve urgent court papers within 24 to 48 hours.' },
      { q: 'What should we prepare before our commercial litigation consultation?', a: 'Please assemble the underlying agreement, all written correspondence (emails, letters, WhatsApp transcripts), invoices, and a brief chronological summary of events.' }
    ]
  },
  {
    id: 'labour-law',
    title: 'Labour & Employment Law',
    band: 'business',
    shortDesc: 'Strategic representation for employers and executives at the CCMA, Bargaining Councils, and Labour Court across misconduct, retrenchments, and unfair dismissals.',
    fullDesc: 'South African labour legislation requires rigorous procedural and substantive fairness. M&M Legal advises corporate employers, executives, and trade unions on complex workplace reorganisations, Section 189 retrenchment consultations, disciplinary hearings, restraint of trade enforcement, and strike management.',
    keyActs: ['Labour Relations Act 66 of 1995 (LRA)', 'Basic Conditions of Employment Act 75 of 1997', 'Employment Equity Act 55 of 1998'],
    capabilities: [
      'CCMA, Bargaining Council & Labour Court Representation',
      'Section 189 & 189A Large-Scale Retrenchment Facilitation',
      'Executive Disciplinary Inquiries & Independent Chairing',
      'Employment Contracts, Restraint of Trade & Policies',
      'Unfair Dismissal, Unfair Labour Practice & Discrimination Claims',
      'Workplace Dispute Mediation & Collective Bargaining'
    ],
    typicalClients: ['Corporate employers & HR divisions', 'Executive directors', 'Public sector managers', 'Senior professionals'],
    processSteps: [
      { title: 'Procedural Audit', desc: 'Scrutinising whether statutory timelines and internal policies were strictly adhered to.' },
      { title: 'Conciliation & Advisory', desc: 'Engaging in strategic settlement negotiations to mitigate reputational and legal risk.' },
      { title: 'Arbitration / Labour Court Trial', desc: 'Vigorous cross-examination and presentation of documentary and witness evidence.' }
    ],
    faqs: [
      { q: 'What is the statutory deadline to refer an unfair dismissal to the CCMA?', a: 'An unfair dismissal dispute must be referred to the CCMA or relevant Bargaining Council within 30 days of the dismissal date, or within 30 days of the employer making a final decision.' }
    ]
  },
  {
    id: 'procurement-governance',
    title: 'Public, Administrative Law & Procurement',
    band: 'business',
    shortDesc: 'Advising public entities and bidding contractors on tender compliance, PAJA judicial reviews, municipal governance, and PFMA/MFMA regulatory adherence.',
    fullDesc: 'Our administrative and public law practice bridges government mandates with constitutional integrity. We advise bidders and state organs on tender specifications, bid disqualification challenges, supply chain audits, and judicial review proceedings under the Promotion of Administrative Justice Act (PAJA).',
    keyActs: ['Constitution of the Republic of South Africa, 1996', 'Promotion of Administrative Justice Act (PAJA) 3 of 2000', 'Public Finance Management Act (PFMA) 1 of 1999', 'Preferential Procurement Policy Framework Act (PPPFA)'],
    capabilities: [
      'Tender Award Challenges & PAJA Judicial Reviews',
      'PFMA, MFMA & Treasury Regulation Compliance',
      'Public Sector Governance Audits & Risk Advisory',
      'Municipal Law, By-Laws & Administrative Interdicts',
      'Public-Private Partnerships (PPP) Structuring'
    ],
    typicalClients: ['Government departments & SOEs', 'Commercial tender bidders', 'Municipalities', 'Infrastructure developers'],
    processSteps: [
      { title: 'Record Review (Rule 53)', desc: 'Obtaining and analysing the full administrative record of decision from the organ of state.' },
      { title: 'Grounds of Review', desc: 'Identifying procedural irrationality, bias, or material errors of law in the award.' },
      { title: 'High Court Review Proceedings', desc: 'Seeking judicial orders setting aside unlawful tender awards and granting interdictory relief.' }
    ],
    faqs: [
      { q: 'Can an unsuccessful bidder interdict the implementation of an awarded tender?', a: 'Yes. An urgent Part A interdict can be lodged in the High Court pending the outcome of a Part B judicial review to prevent contract execution if prima facie unlawfulness exists.' }
    ]
  },
  {
    id: 'property-conveyancing',
    title: 'Property, Conveyancing & Developments',
    band: 'property',
    shortDesc: 'Guiding residential and commercial property transfers, bond registrations, sectional title schemes, servitudes, and township developments in Gauteng.',
    fullDesc: 'Real estate transactions require meticulous conveyancing protocols to ensure undisputed title transfer. M&M Legal oversees commercial developments, private conveyancing, bond cancellations, lease agreements, and land tenure disputes with unmatched diligence and swift deeds office turnarounds.',
    keyActs: ['Deeds Registries Act 47 of 1937', 'Sectional Titles Act 95 of 1986', 'Property Practitioners Act 22 of 2019'],
    capabilities: [
      'Residential & Commercial Property Conveyancing',
      'Township Establishment & Sectional Title Schemes',
      'Deeds Office Searches, Title Clearances & Registrations',
      'Commercial Lease Agreements & Eviction Proceedings',
      'Subdivisions, Servitudes & Land Consolidation'
    ],
    typicalClients: ['Property developers', 'Homebuyers & sellers', 'Commercial landlords', 'Estate administrators'],
    processSteps: [
      { title: 'Document Verification', desc: 'Reviewing deed conditions, rates clearances, and compliance certificates.' },
      { title: 'Deeds Office Lodgment', desc: 'Lodging transfer documents at the Pretoria Deeds Office.' },
      { title: 'Registration & Final Accounting', desc: 'Confirming registration and disbursing funds securely to the parties.' }
    ],
    faqs: [
      { q: 'How long does a standard property transfer take in Pretoria?', a: 'Typically 6 to 10 weeks from the date when all suspensive conditions (e.g. bond approval) are fulfilled and municipal clearance certificates are received.' }
    ]
  },
  {
    id: 'trusts-estates',
    title: 'Trusts, Wills & Estate Administration',
    band: 'property',
    shortDesc: 'Comprehensive estate planning, drafting tax-efficient wills, family and business trust registrations, and administering deceased estates with the Master of the High Court.',
    fullDesc: 'Protecting your family’s generational wealth requires thoughtful legal structures. We assist clients in drafting resilient wills, establishing inter vivos and testamentary trusts, obtaining Letters of Executorship from the Master of the High Court, and liquidating and distributing deceased estates without unnecessary delays.',
    keyActs: ['Administration of Estates Act 66 of 1965', 'Trust Property Control Act 57 of 1988', 'Wills Act 7 of 1953'],
    capabilities: [
      'Drafting Custom Wills & Living Wills',
      'Registration of Family, Business & Asset Protection Trusts',
      'Reporting Deceased Estates to the Master of the High Court',
      'Liquidation & Distribution Account (L&D) Preparation',
      'Estate Dispute Resolution & Executor Removal Applications'
    ],
    typicalClients: ['Families & individuals', 'Business owners', 'Heirs & beneficiaries', 'Trustees'],
    processSteps: [
      { title: 'Estate Reporting', desc: 'Lodging death notice, original will, and inventory with the Master of the High Court.' },
      { title: 'Letters of Executorship', desc: 'Securing legal authority to take custody of and manage the deceased’s assets.' },
      { title: 'L&D Account & Master Approval', desc: 'Advertising in the Government Gazette and lodging final accounts for inspection.' }
    ],
    faqs: [
      { q: 'What happens if a person passes away without a valid will in South Africa?', a: 'Their estate is distributed according to the Intestate Succession Act, which follows a statutory formula that may not reflect their personal wishes.' }
    ]
  },
  {
    id: 'family-law',
    title: 'Family Law & Matrimonial Matters',
    band: 'people',
    shortDesc: 'Compassionate, decisive legal guidance for contested and uncontested divorces, antenuptial contracts, maintenance, parental rights, and domestic protection.',
    fullDesc: 'Family disputes require legal strength tempered by human empathy. M&M Legal guides individuals through marriage contracts (ANC with or without accrual), divorce proceedings, child care and contact plans, maintenance enforcement, and domestic violence protection orders.',
    keyActs: ['Divorce Act 70 of 1979', 'Children’s Act 38 of 2005', 'Maintenance Act 99 of 1998', 'Domestic Violence Act 116 of 1998'],
    capabilities: [
      'Contested & Uncontested Divorce Proceedings',
      'Antenuptial Contracts (ANC) Registration',
      'Parenting Plans, Custody & Contact Disputes',
      'Child & Spousal Maintenance Calculations & Enforcement',
      'Rule 43 / Rule 58 Interim Maintenance & Fee Contribution Applications'
    ],
    typicalClients: ['Spouses seeking divorce', 'Parents navigating custody', 'Engaged couples', 'Guardians'],
    processSteps: [
      { title: 'Confidential Consultation', desc: 'Clarifying rights, matrimonial property regime implications, and priorities.' },
      { title: 'Mediation / Settlement Draft', desc: 'Aiming for a dignified settlement agreement and parenting plan.' },
      { title: 'Court Decree of Divorce', desc: 'Finalising the order in the Regional Court or High Court.' }
    ],
    faqs: [
      { q: 'What is the difference between an uncontested and contested divorce?', a: 'An uncontested divorce occurs when both spouses agree on property division, maintenance, and child care terms, taking as little as 4–8 weeks. Contested divorces proceed through formal litigation.' }
    ]
  },
  {
    id: 'human-rights',
    title: 'Social Justice & Constitutional Law',
    band: 'people',
    shortDesc: 'Championing constitutional freedoms, equality, anti-discrimination, unlawful detention claims against the police, and socio-economic rights.',
    fullDesc: 'Rooted in the South African constitutional ethos, M&M Legal advocates for individuals and community organisations whose fundamental rights have been infringed. We handle unlawful arrest and detention claims against the Minister of Police, equality court applications, and public interest litigation.',
    keyActs: ['Constitution of the Republic of South Africa, 1996', 'Promotion of Equality and Prevention of Unfair Discrimination Act 4 of 2000', 'State Liability Act 20 of 1957'],
    capabilities: [
      'Unlawful Arrest, Police Brutality & Detention Claims',
      'Equality Court & Hate Speech Proceedings',
      'Housing & Eviction Rights Defense (PIE Act)',
      'Constitutional Rights Interdicts against Organs of State'
    ],
    typicalClients: ['Victims of state overreach', 'Community groups', 'Individuals facing unlawful discrimination'],
    processSteps: [
      { title: 'Statutory Notice (Section 3)', desc: 'Serving mandatory notice under the Institution of Legal Proceedings Against Certain Organs of State Act.' },
      { title: 'Summons Issuance', desc: 'Claiming damages for deprivation of liberty, trauma, and medical expenses.' },
      { title: 'Litigation & Settlement', desc: 'Securing vindication of constitutional dignity and financial compensation.' }
    ],
    faqs: [
      { q: 'What is the time limit for suing the South African Police Service (SAPS)?', a: 'You must deliver a formal Section 3 notice within 6 months of the unlawful incident, and institute summons within 3 years of the cause of action.' }
    ]
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury & Road Accident Fund (RAF)',
    band: 'people',
    shortDesc: 'Pursuing rightful compensation for victims of severe motor vehicle accidents, medical negligence, and catastrophic personal injury.',
    fullDesc: 'When traumatic injury strikes, victims need dedicated legal champions to secure long-term medical care, lost earning capacity compensation, and general damages. M&M Legal handles claims against the Road Accident Fund (RAF), private healthcare institutions, and negligent parties.',
    keyActs: ['Road Accident Fund Act 56 of 1996 (as amended)', 'State Liability Act', 'Common Law Delictual Principles'],
    capabilities: [
      'Road Accident Fund (RAF) Serious Injury Claims',
      'Loss of Earnings & Support Calculations',
      'Medical Negligence & Hospital Malpractice Inquiries',
      'Independent Medical Specialist Assessment Coordination'
    ],
    typicalClients: ['Motor vehicle collision victims', 'Pedestrians injured on public roads', 'Dependants of deceased breadwinners'],
    processSteps: [
      { title: 'Claim Lodgment', desc: 'Gathering accident reports, hospital records, and RAF statutory forms.' },
      { title: 'Medico-Legal Evaluation', desc: 'Facilitating examinations by orthopaedic surgeons, neurologists, and actuaries.' },
      { title: 'High Court Action / Settlement', desc: 'Advocating for full compensation representing your lifelong care needs.' }
    ],
    faqs: [
      { q: 'How long do I have to submit a Road Accident Fund claim?', a: 'For identified vehicle accidents, the claim must be lodged within 3 years of the accident date. For hit-and-run accidents, the claim must be lodged within 2 years.' }
    ]
  },
  {
    id: 'sports-media',
    title: 'Sports, Media & Entertainment Law',
    band: 'culture',
    shortDesc: 'Tailored contract negotiation, image rights protection, endorsement structuring, and talent representation across South Africa’s creative and sporting industries.',
    fullDesc: 'Athletes, musicians, producers, and content creators operate in fast-paced commercial ecosystems. M&M Legal negotiates broadcast agreements, recording and publishing contracts, player transfers, sponsorship sponsorships, and defends copyright against infringement.',
    keyActs: ['Copyright Act 98 of 1978', 'Performers Protection Act 11 of 1967', 'Trade Marks Act 194 of 1993'],
    capabilities: [
      'Talent Management & Athlete Representation Contracts',
      'Music Publishing, Master Recording & Sync Licensing',
      'Sponsorship, Ambassador & Endorsement Structuring',
      'Defamation, Personality Rights & Media Dispute Resolution'
    ],
    typicalClients: ['Professional athletes', 'Musicians & record labels', 'Film & digital content producers', 'Creative agencies'],
    processSteps: [
      { title: 'Contractual Audit', desc: 'Eliminating predatory clauses, perpetuity locks, and unfair revenue splits.' },
      { title: 'Commercial Negotiation', desc: 'Direct representation with sporting clubs, record labels, and corporate sponsors.' },
      { title: 'Rights Enforcment', desc: 'Cease and desist actions against unauthorized commercial exploitation of your name and work.' }
    ],
    faqs: [
      { q: 'Can M&M Legal review an existing record deal or sports contract before signing?', a: 'Yes. We offer rapid-turnaround contract advisory sessions to highlight restrictive covenants, royalties, and ownership rights.' }
    ]
  },
  {
    id: 'technology-telecoms',
    title: 'Telecommunications, Technology & Cyber Law',
    band: 'culture',
    shortDesc: 'Advising technology firms, SaaS providers, and telecommunications operators on POPIA compliance, software licensing, ICASA regulations, and cyber security.',
    fullDesc: 'Modern commerce runs on code, data, and communications infrastructure. M&M Legal provides cutting-edge advisory on the Protection of Personal Information Act (POPIA), Cybercrimes Act, software development agreements, cloud service level agreements (SLAs), and regulatory compliance with ICASA.',
    keyActs: ['Protection of Personal Information Act 4 of 2013 (POPIA)', 'Cybercrimes Act 19 of 2020', 'Electronic Communications and Transactions Act 25 of 2002'],
    capabilities: [
      'POPIA Compliance Frameworks & Data Privacy Policies',
      'SaaS Master Service Agreements & API Licensing',
      'Telecommunications Regulatory & ICASA Licensing Support',
      'Data Breach Incident Response & Information Regulator Notification',
      'E-Commerce Terms & Conditions and Consumer Protection Alignment'
    ],
    typicalClients: ['Software companies & startups', 'Telecommunications operators', 'E-commerce platforms', 'Corporate data controllers'],
    processSteps: [
      { title: 'Data Flow & Risk Mapping', desc: 'Identifying cross-border data transfers, personal data storage, and regulatory exposure.' },
      { title: 'Contract Architecture', desc: 'Drafting robust IP ownership, liability caps, and uptime SLAs.' },
      { title: 'Regulatory Representation', desc: 'Liaising with the Information Regulator and ICASA on statutory inquiries.' }
    ],
    faqs: [
      { q: 'What must an organisation do immediately after discovering a data breach under POPIA?', a: 'Under Section 22 of POPIA, the responsible party must notify both the Information Regulator and affected data subjects as soon as reasonably possible after discovery of the breach.' }
    ]
  },
  {
    id: 'competition-law',
    title: 'Competition Law & Market Conduct',
    band: 'business',
    shortDesc: 'Merger notifications, cartel conduct defense, abuse of dominance advisory, and representation before the Competition Commission and Competition Tribunal.',
    fullDesc: 'South Africa’s competition regime is renowned for rigorous enforcement. M&M Legal assists enterprises in navigating small, intermediate, and large merger filings, conducting internal competition audits, and responding to inquiries or investigations by the Competition Commission.',
    keyActs: ['Competition Act 89 of 1998 (as amended)', 'Competition Tribunal Rules'],
    capabilities: [
      'Merger Filings & Strategic Filings before the Competition Commission',
      'Abuse of Dominance & Restrictive Horizontal/Vertical Practices Advisory',
      'Competition Compliance Audits for Corporate Executives',
      'Interventions in Mergers for Third-Party Stakeholders'
    ],
    typicalClients: ['Acquiring & target firms', 'Industry trade associations', 'Corporate enterprises'],
    processSteps: [
      { title: 'Merger Threshold Calculation', desc: 'Assessing combined turnover and asset values against statutory thresholds.' },
      { title: 'Filing Preparation', desc: 'Compiling competitive impact statements, market definitions, and public interest factors.' },
      { title: 'Commission & Tribunal Hearings', desc: 'Representing clients in obtaining unconditional or conditional merger clearances.' }
    ],
    faqs: [
      { q: 'What is the difference between an intermediate and large merger in South Africa?', a: 'Classification depends on the combined turnover/asset values of the acquiring and target firms, which dictates filing fees, statutory investigation timelines, and whether the Competition Tribunal must approve the transaction.' }
    ]
  }
];

export interface AttorneyProfile {
  name: string;
  role: string;
  credentials: string;
  admissions: string;
  bio: string;
  specialties: string[];
  education: string;
  email: string;
  phone: string;
}

export const ATTORNEYS: AttorneyProfile[] = [
  {
    name: 'Zamuxolo “Zama” Madungandaba',
    role: 'Founding & Managing Partner',
    credentials: 'Admitted Attorney of the High Court of South Africa',
    admissions: 'Legal Practice Council (LPC) Member | Pretoria Bar & Gauteng Provincial Office',
    bio: 'Founder of M&M Legal (Mtimkulu & Madungandaba Attorneys), Zamuxolo Madungandaba brings extensive legal acumen and visionary leadership to the firm. With a deep commitment to legal precision, technological innovation, and client empowerment, she has guided complex commercial litigation, public administrative reviews, and high-value corporate negotiations across South Africa.',
    specialties: ['Commercial Litigation', 'Public & Administrative Law', 'Procurement Advisory', 'Labour Disputes'],
    education: 'B.Proc / LLB, Postgraduate Corporate & Commercial Law Specialist',
    email: 'zama@mandmlegal.co.za',
    phone: '+27 (0)12 385 1007'
  }
];

export interface LegalInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  fullContent: string[];
  keyTakeaways: string[];
}

export const LEGAL_INSIGHTS: LegalInsight[] = [
  {
    id: 'procurement-reviews-paja',
    title: 'Challenging Unlawful Tender Awards: The High Court PAJA Playbook',
    category: 'Procurement & Public Law',
    readTime: '6 min read',
    date: 'August 2026',
    author: 'M&M Legal Public Law Practice',
    summary: 'A strategic guide for commercial bidders on invoking Rule 53 records, proving irrationality, and seeking urgent interdicts against irregular public awards.',
    fullContent: [
      'In South African administrative law, Section 217 of the Constitution mandates that procurement by organs of state must be fair, equitable, transparent, competitive, and cost-effective.',
      'When an award is marred by procedural bias, arbitrary scoring changes, or non-compliance with the tender specification, an aggrieved bidder must act decisively.',
      'The first crucial step is lodging an urgent Part A interdict to prevent the state entity from concluding a service agreement with the preferred bidder while Part B (the substantive judicial review) is argued.',
      'Under Uniform Rule 53, the state body must furnish the complete record of decision within 15 days, allowing legal counsel to unearth scoring discrepancies and supply chain irregularities.'
    ],
    keyTakeaways: [
      'Statutory review under PAJA must be initiated without unreasonable delay (maximum 180 days).',
      'Urgent Part A interdicts preserve the status quo before irreversible public funds are disbursed.',
      'Rule 53 discovery reveals the hidden scoring deliberations of the Bid Adjudication Committee.'
    ]
  },
  {
    id: 'labour-retrenchments-section189',
    title: 'Navigating Section 189 Retrenchments: Employer Compliance in Tough Economic Climates',
    category: 'Labour & Workplace Law',
    readTime: '5 min read',
    date: 'July 2026',
    author: 'M&M Legal Labour Team',
    summary: 'Essential procedural steps and consensus-seeking consultation rules under the Labour Relations Act to avoid costly unfair dismissal awards.',
    fullContent: [
      'Operational requirements dismissals in South Africa are heavily regulated under Section 189 of the Labour Relations Act (LRA).',
      'Consultation must not be a mechanical rubber-stamping exercise; it requires an authentic joint consensus-seeking process regarding alternatives to retrenchment, selection criteria (such as LIFO), and severance pay.',
      'Failing to issue a comprehensive Section 189(3) written notice detailing the rationale and alternatives considered is fatal to the procedural fairness of the process at the Labour Court.'
    ],
    keyTakeaways: [
      'Section 189(3) written notice is mandatory before any retrenchment decisions are finalised.',
      'Objective selection criteria (such as Last In, First Out with skills retention) must be agreed upon.',
      'Severance pay must at minimum meet statutory thresholds of one week per completed year of service.'
    ]
  },
  {
    id: 'property-transfers-decedents-estates',
    title: 'Transferring Property from a Deceased Estate: What Heirs and Executors Must Know',
    category: 'Property & Estates',
    readTime: '4 min read',
    date: 'June 2026',
    author: 'M&M Legal Conveyancing Department',
    summary: 'A step-by-step walkthrough of Section 42(2) Master endorsements, rates clearances, and transfer deeds when managing inherited immovable property.',
    fullContent: [
      'Transferring property from a deceased estate is distinct from ordinary property conveyancing.',
      'Before a conveyancer can lodge transfer documents at the Deeds Office, the Executor must obtain formal Letters of Executorship and a Section 42(2) endorsement from the Master of the High Court.',
      'The conveyancer must confirm that the Liquidation and Distribution account has lain open for public inspection for 21 days without objections.'
    ],
    keyTakeaways: [
      'No property transfer can occur without formal Letters of Executorship.',
      'Section 42(2) endorsement certifies no outstanding creditor claims obstruct the transfer.',
      'Estate conveyancing ensures beneficiaries receive unencumbered title deeds.'
    ]
  },
  {
    id: 'popia-data-breach-playbook',
    title: 'The First 48 Hours of a Corporate Data Breach: POPIA Section 22 Obligations',
    category: 'Technology & Cyber Law',
    readTime: '5 min read',
    date: 'May 2026',
    author: 'M&M Legal Cyber & Tech Desk',
    summary: 'How South African enterprises must coordinate notifications to the Information Regulator and affected customers to prevent statutory fines.',
    fullContent: [
      'Under the Protection of Personal Information Act (POPIA), a data breach trigger requires immediate dual-track intervention.',
      'Section 22 requires the responsible party to notify the Information Regulator and data subjects as soon as reasonably possible after discovery.',
      'Having legal counsel direct forensic investigations preserves legal privilege over internal vulnerability assessments.'
    ],
    keyTakeaways: [
      'Notification must include description of incident, measures taken, and mitigation advice for data subjects.',
      'Engaging external legal counsel helps maintain attorney-client privilege over forensic investigations.',
      'Non-compliance can attract administrative fines of up to R10 million from the Information Regulator.'
    ]
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    category: 'Consultations & Engagement',
    question: 'What should I prepare before my initial consultation with M&M Legal?',
    answer: 'Please assemble any relevant agreements, official correspondence (emails, letters, WhatsApp transcripts), court notices, or identity documents relating to your matter. Having a brief chronological summary of events enables our legal team to evaluate your case efficiently and provide immediate strategic direction.'
  },
  {
    category: 'Consultations & Engagement',
    question: 'Does submitting an enquiry or booking request create an attorney-client relationship?',
    answer: 'No. Submitting an enquiry via our website or initiating a preliminary consultation does not automatically create an attorney-client relationship. A formal relationship is established only upon conflict verification, mutually signing our formal Engagement Letter, and agreeing to the terms of mandate.'
  },
  {
    category: 'Consultations & Engagement',
    question: 'Where is M&M Legal located, and do you handle matters outside Pretoria?',
    answer: 'Our main offices are located at 57 Mosalo Street, Atteridgeville, Pretoria. We actively represent individuals, corporate enterprises, and institutions throughout Gauteng, the wider South Africa, and cross-border commercial matters across the African continent through our digital consultation infrastructure and correspondent network.'
  },
  {
    category: 'Practice & Scope',
    question: 'How do I know which practice area applies to my legal situation?',
    answer: 'You can use our interactive “What brings you here?” guided gateway on the homepage, or select “General / Multi-Disciplinary Inquiry” during your booking. Our partners will review your summary and direct your matter to the specialized attorney best equipped for your specific context.'
  },
  {
    category: 'Practice & Scope',
    question: 'Can M&M Legal assist government departments and public institutions?',
    answer: 'Yes. M&M Legal possesses extensive expertise in public, administrative, and constitutional law, including tender governance, PFMA/MFMA compliance audits, by-law drafting, and representing organs of state in judicial review proceedings.'
  },
  {
    category: 'Confidentiality & Technology',
    question: 'How does M&M Legal protect client information and document uploads?',
    answer: 'All communications and uploaded documents are handled in strict adherence to attorney-client privilege and the Protection of Personal Information Act (POPIA). Our systems use end-to-end encrypted protocols, and documents are reviewed solely by authorized legal personnel.'
  },
  {
    category: 'Emergency & Urgent Matters',
    question: 'What is the fastest way to contact M&M Legal for an urgent court deadline or arrest?',
    answer: 'For time-critical matters requiring immediate intervention (such as urgent High Court interdicts, weekend bail applications, or imminent statutory deadlines), call our office directly at +27 (0)12 385 1007 or initiate an urgent WhatsApp enquiry using the dedicated button in our navigation bar.'
  }
];
