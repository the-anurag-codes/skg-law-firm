export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

/**
 * FAQ content is written in plain, conversational language to be
 * extractable by AI answer engines (GEO — Generative Engine Optimisation).
 */
export const faqs: FAQ[] = [
  {
    question: 'What does S.K. Gambhir & Co. specialise in?',
    answer:
      'S.K. Gambhir & Co. is a Delhi-based law firm specialising in direct tax, GST and indirect taxation, corporate law and compliance, international tax and NRI advisory, and tax litigation. The firm was founded in 1987 by S.K. Gambhir and has advised Indian businesses, promoters, and NRI clients for over 38 years.',
    category: 'About the Firm',
  },
  {
    question: 'Where is S.K. Gambhir & Co. located?',
    answer:
      'The firm has two locations in Delhi. The main office is at 4P9, 3rd Floor, Main Road, Jagriti Enclave, Delhi – 110 092. The chamber, used primarily for litigation-related consultations and court-proximity meetings, is at Plot No. 30, 4th Floor, Ch. N-02, D.D.U. Marg, Rouse Avenue, New Delhi – 110 002. The Rouse Avenue chamber is available by prior appointment only.',
    category: 'About the Firm',
  },
  {
    question: 'How can I schedule a consultation with the firm?',
    answer:
      'You can schedule a consultation by calling S.K. Gambhir directly at +91 98100 29705 or Sumit Gambhir at +91 99999 93339. You may also send an email to skgambhir@hotmail.com or use the consultation request form on this website. The firm offers an initial 15-minute screening call at no charge to assess whether the matter falls within the firm\'s areas of practice.',
    category: 'Consultations',
  },
  {
    question: 'Does the firm advise NRIs on Indian tax matters?',
    answer:
      'Yes. S.K. Gambhir & Co. advises NRIs on residency determination under the Income Tax Act, 1961 (including the changes introduced by the Finance Act 2020), the taxation of Indian-sourced income including interest, dividends, capital gains, and rental income, TDS compliance, DTAA treaty benefits, and repatriation of funds under FEMA, 1999.',
    category: 'Practice Areas',
  },
  {
    question: 'What forums does the firm appear before for income tax disputes?',
    answer:
      'The firm represents clients at all levels of the income tax appellate hierarchy: before the Commissioner of Income Tax (Appeals), the Income Tax Appellate Tribunal (ITAT), the High Courts, and the Supreme Court of India. The firm also represents clients at the assessment stage before the Assessing Officer and in proceedings before the Dispute Resolution Panel (DRP).',
    category: 'Litigation',
  },
  {
    question: 'Can the firm assist a startup with angel tax (section 56(2)(viib)) compliance?',
    answer:
      'Yes. Section 56(2)(viib) of the Income Tax Act imposes a tax charge on closely held companies that issue shares at a price exceeding the fair market value of those shares. S.K. Gambhir & Co. advises startups — including DPIIT-recognised startups, which have a separate exemption route — on the valuation methodology required under Rule 11UA, the documentary record required to defend an issuance, and the structuring of funding rounds to reduce the risk of an addition under this provision.',
    category: 'Practice Areas',
  },
  {
    question: 'Does the firm handle GST matters?',
    answer:
      'Yes. The firm\'s GST practice covers compliance, advisory, and litigation. This includes GST registration and return filing, input tax credit analysis and reconciliation, advisory on classification and place of supply, representation in departmental audits and adjudication proceedings, refund claims for exporters, and writ petitions before the High Court where questions of jurisdiction or legality arise.',
    category: 'Practice Areas',
  },
  {
    question: 'What is the firm\'s approach to tax planning?',
    answer:
      'S.K. Gambhir & Co. takes a conservative, statute-based approach to tax planning. The firm advises clients on arrangements that are supported by the text of the legislation, CBDT circulars, and settled judicial authority. The firm does not recommend positions that depend on ambiguity alone or that carry a material risk of being characterised as tax avoidance under the General Anti-Avoidance Rule.',
    category: 'About the Firm',
  },
];
