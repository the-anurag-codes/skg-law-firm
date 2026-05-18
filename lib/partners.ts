export interface Partner {
  id: string;
  name: string;
  title: string;
  credentials: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  since: number;
  image: string;
  shortBio: string;
  fullBio: string;
}

export const partners: Partner[] = [
  {
    id: 'sk-gambhir',
    name: 'S.K. Gambhir',
    title: 'Founding Partner',
    credentials: 'M.Com., LL.B.',
    phone: '+919810029705',
    phoneDisplay: '+91 98100 29705',
    email: 'skgambhir@hotmail.com',
    since: 1987,
    image: '/images/sk-gambhir.jpg',
    shortBio:
      'S.K. Gambhir founded the firm in 1987 with a focus on direct tax representation before the Income Tax Appellate Tribunal and the Delhi High Court. Over nearly four decades of practice, he has advised businesses, promoters, and high-net-worth individuals on income tax, corporate compliance, and transactional matters across India.',
    fullBio: `S.K. Gambhir established the firm in 1987, at a time when the income tax assessment and appellate practice in Delhi demanded a combination of statutory rigour and courtroom experience. A graduate in Commerce and Law, he built his initial practice around Income Tax Appellate Tribunal appearances, developing a reputation for precise drafting and thorough preparation.

Over the nearly four decades that followed, the firm's practice evolved to reflect the changing landscape of Indian taxation — from the pre-liberalisation era of high marginal rates and pervasive disallowances, through the reforms of the 1990s and 2000s, to the present environment of enhanced reporting obligations, GAAR, and GST. Through each transition, Mr. Gambhir's approach has remained consistent: read the statute carefully, understand the facts completely, and advise conservatively but with conviction.

His practice spans direct tax assessments, ITAT representation, corporate law compliance, and advisory on high-value transactions. He has advised promoters and business families on succession planning, business restructuring, and the tax implications of cross-generational wealth transfers.

[Placeholder: client to add professional memberships, notable matters argued (anonymised), Bar Council enrolment number, and any professional recognitions before the site goes live. The firm's communications counsel should review the final bio for Bar Council Rule 36 compliance.]`,
  },
  {
    id: 'sumit-gambhir',
    name: 'Sumit Gambhir',
    title: 'Partner',
    credentials: 'B.Com., LL.M. (Jindal Global Law School)',
    phone: '+919999993339',
    phoneDisplay: '+91 99999 93339',
    email: 'sumitgambhir@hotmail.com',
    since: 2015,
    image: '/images/sumit-gambhir.jpg',
    shortBio:
      "Sumit Gambhir joined the firm in 2015, bringing formal postgraduate legal education and a focus on corporate advisory, GST, international tax, and startup-stage matters. He represents the firm's second generation of counsel and works closely with founders, CFOs, and corporate treasurers on transactional and compliance matters.",
    fullBio: `Sumit Gambhir read Law after completing his undergraduate degree in Commerce, subsequently earning his LL.M. with a focus on corporate and tax law. He joined S.K. Gambhir & Co. in 2015, anchoring the firm's advisory work on Goods and Services Tax, corporate compliance, international tax, and early-stage company matters.

His practice reflects the priorities of a new generation of Indian businesses: GST structuring for complex multi-state supply chains, cross-border advisory for NRI investors and outbound Indian businesses, ESOP planning for startup founders, and section 56(2)(viib) compliance for companies raising capital at a premium. He advises clients on the tax and regulatory interface of inbound and outbound foreign direct investment under FEMA, 1999.

Within the firm's litigation practice, Sumit contributes to the drafting of appeals, written submissions, and miscellaneous petitions, and has appeared before adjudicating authorities in GST and income tax proceedings. He works closely with the firm's clients on their annual income tax and GST compliance — reviewing returns, identifying and addressing potential scrutiny triggers, and maintaining the kind of documentary discipline that makes assessments less contentious.

[Placeholder: client to add professional memberships, Bar Council enrolment number, and a brief note on academic distinctions or relevant prior experience before the site goes live.]`,
  },
];
