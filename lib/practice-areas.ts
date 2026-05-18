export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  representativeWork: string[];
  cta: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'direct-tax',
    number: '01',
    title: 'Direct Tax Advisory & Litigation',
    shortDescription:
      'Income tax planning, assessments, appeals before CIT(A), ITAT, High Courts, and the Supreme Court.',
    fullDescription: `The firm's core practice. Since 1987, S.K. Gambhir & Co. has advised businesses, promoters, and individuals on the full spectrum of direct tax matters arising under the Income Tax Act, 1961. Our counsel spans tax-efficient structuring of transactions, preparation and review of returns, representation in scrutiny assessments before the Assessing Officer, and appeals through the statutory hierarchy — Commissioner of Income Tax (Appeals), the Income Tax Appellate Tribunal, and the High Courts.

We advise on capital gains arising from sale of shares, immovable property, and other assets; taxation of business reorganisations including mergers, demergers, and slump sales; and the tax treatment of perquisites, ESOPs, and deferred compensation arrangements. Our assessment practice covers notices under sections 143(3), 147/148, and 263, including search and survey proceedings.

The firm takes a considered, file-based approach: every submission is grounded in the legislative text, judicial precedent, and the CBDT's own circulars and instructions. We do not recommend aggressive positions without a defensible legal basis. When a matter proceeds to litigation, we draft the grounds of appeal and written submissions with the precision appropriate to a quasi-judicial forum.`,
    representativeWork: [
      'Representation in scrutiny assessment proceedings for listed and unlisted companies',
      'Appeals before CIT(A) on disallowances under sections 14A, 40(a)(ia), and 36(1)(va)',
      'Structuring of promoter share sales to optimise capital gains under section 112 and applicable DTAA provisions',
      'Advisory on taxation of ESOPs at exercise and sale, including relief under Rule 3 of the Income Tax Rules',
      'Representation before ITAT on issues of business income vs. capital gains characterisation',
      'Advisory on section 56(2)(x) implications in secondary share transactions',
      'Preparation of submissions in 148/147 reassessment proceedings',
    ],
    cta: 'Discuss a direct tax matter',
  },
  {
    id: 'gst',
    number: '02',
    title: 'GST & Indirect Taxation',
    shortDescription:
      'Compliance, advisory, departmental representation, refunds, and litigation under the CGST Act, 2017.',
    fullDescription: `Since the introduction of the Goods and Services Tax regime under the Central Goods and Services Tax Act, 2017, the Integrated GST Act, 2017, and corresponding State enactments, the firm has advised businesses across sectors on transition, compliance, and disputes arising under the new regime.

Our GST practice covers classification of goods and services, determination of the place of supply, admissibility of input tax credit under section 16 and 17, treatment of inter-company transactions, anti-profiteering compliance, and e-invoicing and e-way bill obligations. We advise exporters on refund claims under section 54, including documentation requirements and the mechanics of RFD-01 filings.

On the litigation side, we represent clients at the adjudication stage before the proper officer, in appeals before the Appellate Authority and the GST Appellate Tribunal (once constituted at the relevant tier), and in writ petitions before the High Court where the statutory remedy is inadequate or the question is one of jurisdiction or constitutional validity.

Our indirect tax work extends to legacy matters under Central Excise, Customs, and Service Tax, including proceedings before the Customs, Excise and Service Tax Appellate Tribunal (CESTAT).`,
    representativeWork: [
      'GST structuring advisory for real estate developers on joint development agreements',
      'Input tax credit reconciliation and reversal strategy for manufacturing clients',
      'Representation in departmental audits and scrutiny proceedings under section 65 CGST Act',
      'Refund claims for exporters of services — advisory and documentation support',
      'Advisory on GST implications of business transfers, mergers, and demergers',
      'Writ petitions challenging levy and classification orders',
      'Service tax legacy dispute resolution and voluntary disclosure advisory',
    ],
    cta: 'Discuss a GST matter',
  },
  {
    id: 'corporate',
    number: '03',
    title: 'Corporate Law & Compliance',
    shortDescription:
      'Companies Act compliance, ROC filings, board advisory, ESOPs, M&A support, and shareholder disputes.',
    fullDescription: `The firm's corporate practice operates at the intersection of the Companies Act, 2013, SEBI regulations, and the related body of rules and notifications issued by the Ministry of Corporate Affairs. We advise private companies, public unlisted companies, and their promoters on the full lifecycle of corporate existence — from incorporation and share capital structuring through board governance, statutory compliance, and M&A.

On the compliance side, we assist with annual filings before the Registrar of Companies, maintenance of statutory registers, secretarial audit support under section 204, and compliance with related-party transaction requirements under section 188. We advise audit committees and boards on the independence requirements for independent directors and the proper conduct of board and committee meetings under the Companies Act and applicable Secretarial Standards.

For transactions, we advise on share purchase agreements, shareholders' agreements, and subscription agreements — particularly the tax and Companies Act implications of terms relating to valuation, anti-dilution, drag-along, and put/call rights. Our M&A support covers mergers and demergers under the National Company Law Tribunal route, fast-track mergers under section 233, and business transfers by way of slump sale.

The firm also advises on employee stock option plans under the Companies (Share Capital and Debentures) Rules, 2014, and advises startup founders on co-founder arrangements and vesting schedules from the perspectives of company law and direct taxation.`,
    representativeWork: [
      'Incorporation, structuring, and secretarial compliance for private limited companies',
      'ROC filing support and compounding of offences under the Companies Act, 2013',
      'Board and audit committee advisory on related-party transactions and conflict of interest',
      'ESOP plan drafting and tax advisory for startup founders and employees',
      'Shareholder dispute advisory including buy-out arrangements and deadlock resolution',
      'Section 233 fast-track mergers for group reorganisations',
      'Advisory on buyback of shares under sections 68–70 of the Companies Act',
    ],
    cta: 'Discuss a corporate matter',
  },
  {
    id: 'international-tax',
    number: '04',
    title: 'International Tax & NRI Advisory',
    shortDescription:
      'Cross-border structuring, DTAA, transfer pricing, FEMA, and NRI tax matters.',
    fullDescription: `As Indian businesses internationalise and the Indian diaspora acquires assets across jurisdictions, the intersection of domestic tax law, Double Taxation Avoidance Agreements, FEMA, and foreign reporting obligations becomes increasingly consequential. S.K. Gambhir & Co. advises on this intersection with a focus on structuring that is both tax-efficient and regulatory-compliant.

Our international tax practice covers treaty analysis under India's network of DTAAs — particularly the treaties with the UAE, UK, USA, Singapore, Mauritius, Netherlands, and Germany — including determination of beneficial ownership, the characterisation of income as royalties, FTS, or business profits, and the applicability of Limitation of Benefits articles. We advise on transfer pricing documentation requirements under sections 92–92F of the Income Tax Act and assist in preparation of the transfer pricing study and Form 3CEB.

For NRIs, we advise on residency determination under the Finance Act 2020 amendments to section 6 of the Income Tax Act; the taxation of Indian-sourced income including interest, dividends, capital gains, and rental income; the TDS compliance obligations of payers; and repatriation of funds through the Liberalised Remittance Scheme and RBI approvals under FEMA, 1999.

We also advise on the regulatory framework for inbound and outbound investments — FDI compliance, FEMA filings, ODI reporting, and advance pricing agreements (APAs) for recurring cross-border transactions.`,
    representativeWork: [
      'DTAA treaty analysis and beneficial ownership opinions for Mauritius and Singapore holding structures',
      'Transfer pricing documentation and Form 3CEB preparation for IT and pharma companies',
      'NRI residency analysis and tax advisory under the Finance Act 2020 amendments',
      'Capital gains planning on sale of Indian assets by NRI sellers, including TDS compliance',
      'Advisory on Indian tax implications of foreign gifts, inheritances, and offshore trusts',
      'FEMA compliance — filing of FLA returns, FC-GPR, FC-TRS, and ODI reports',
      'Advance Ruling applications before the Board for Advance Rulings for non-residents',
    ],
    cta: 'Discuss an international tax matter',
  },
  {
    id: 'tax-litigation',
    number: '05',
    title: 'Tax Litigation',
    shortDescription:
      'Representation across forums; drafting of appeals, writs, and SLPs.',
    fullDescription: `Tax litigation in India spans a multiplicity of forums — from the first appeal before the Commissioner of Income Tax (Appeals) through the Income Tax Appellate Tribunal, the High Court under its writ and reference jurisdiction, and the Supreme Court. Each forum has its own procedural rules, evidentiary standards, and institutional culture. Effective representation demands familiarity with all of them.

S.K. Gambhir & Co. has appeared before these forums across a range of disputes involving disallowances, additions, penalty proceedings, and jurisdictional challenges. The firm's approach to litigation is methodical: we examine every order critically, identify every ground that is tenable, and draft submissions that are legally precise without sacrificing readability.

At the ITAT, we represent clients on issues ranging from business expenditure disallowances and depreciation disputes to capital gains characterisation, unexplained credits under section 68, and the invocation of the General Anti-Avoidance Rule (GAAR) under Chapter X-A. At the High Court level, our work includes writ petitions challenging assessment jurisdiction and the validity of notices, as well as references on substantial questions of law.

We also represent clients in penalty proceedings under sections 270A and 271, and in prosecution matters where the department has initiated criminal proceedings. The firm advises separately on whether to contest or compound a penalty, having regard to the strength of the case, the quantum at stake, and the cost of prolonged litigation.`,
    representativeWork: [
      'Appeals before CIT(A) on scrutiny additions and disallowances',
      'ITAT representation on section 14A/Rule 8D disallowances and section 68/69 additions',
      'Writ petitions before High Courts challenging jurisdiction and reopening notices',
      'Penalty proceedings under sections 270A and 271(1)(c) — representation and advisory',
      'Drafting of Special Leave Petitions for matters of significant legal or commercial consequence',
      'Advisory on GAAR applicability and preparation of counter-submissions',
      'Representation in TDS default proceedings and TDS-related appeals',
    ],
    cta: 'Discuss a litigation matter',
  },
  {
    id: 'startups',
    number: '06',
    title: 'Advisory for Startups & SMEs',
    shortDescription:
      'Entity setup, founder agreements, ESOP plans, fundraising-stage compliance.',
    fullDescription: `Early-stage companies face a set of legal and tax questions that, if answered correctly at the outset, can save significant time and cost later. S.K. Gambhir & Co. advises founders on entity structure, founder arrangements, and the tax and compliance implications of early funding rounds — with a focus on keeping things simple and defensible.

On entity structuring, we advise on the choice between a private limited company under the Companies Act, 2013 and a Limited Liability Partnership under the LLP Act, 2008, having regard to the intended business model, investor expectations, and the tax treatment of each form. For companies that qualify, we advise on the DPIIT startup recognition and the income tax exemption under section 80-IAC.

At the fundraising stage, we advise on the tax implications of convertible instruments — SAFEs, CCDs, and OCDs — and on the applicability of section 56(2)(viib) (the angel tax provision) to issuances at a premium. We assist in preparing the independent valuation required under Rule 11UA and advise on structuring options that minimise the risk of addition under this provision.

For employees and founders receiving ESOPs or sweat equity, we advise on the taxability at grant, vesting, and exercise, and on the implications of forfeiture, exercise, and subsequent transfer. We also assist startups with their ongoing GST registration and compliance obligations, and with ROC filings in the years following incorporation.`,
    representativeWork: [
      'Incorporation and structuring of private limited companies and LLPs',
      'DPIIT startup recognition and section 80-IAC tax holiday applications',
      'Section 56(2)(viib) (angel tax) advisory and Rule 11UA valuation support',
      'ESOP plan design and tax advisory for founders and early employees',
      'Convertible instrument structuring — CCD, OCD, and SAFE note advisory',
      'GST registration and ongoing compliance for SaaS and product companies',
      'Shareholder and founder agreement review from a tax and Companies Act perspective',
    ],
    cta: 'Discuss a startup matter',
  },
];
