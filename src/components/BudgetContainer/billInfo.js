const bills = [
  {
    _id: 1,
    dateDue: 1,
    type: 'RENT',
    companyName: 'Legacy Realtors',
    amount: 800,
    note: 'some mumbo jumbo about the bill',
  },
  { _id: 2, dateDue: 3, type: 'CAR', companyName: 'Wells Fargo', amount: 454 },
  { _id: 3, dateDue: 9, type: 'HP', companyName: 'Instant Ink', amount: 7 },
  { _id: 4, dateDue: 12, type: 'SPOTIFY', companyName: 'Spotify', amount: 13 },
  { _id: 5, dateDue: 19, type: 'ELECTRIC', companyName: 'Coquitt EMC', amount: 266 },
  { _id: 5, dateDue: 19, type: 'INSURANCE', companyName: 'Progressive (RENTERS)', amount: 35 },
  {
    _id: 6,
    dateDue: 20,
    type: 'HEAD STONE',
    companyName: 'SCI Management - Dignity Memorial',
    amount: 45,
  },
  { _id: 7, dateDue: 20, type: 'INTERNET', companyName: 'Tmobile', amount: 50 },
  { _id: 8, dateDue: 20, type: 'LEGAL SERVICES', companyName: 'Legal Shield', amount: 30 },
  { _id: 9, dateDue: 24, type: 'INSURANCE', companyName: 'Progressive (CAR)', amount: 207 },
  {
    _id: 10,
    dateDue: 25,
    type: 'INSURANCE',
    companyName: 'Senior Life Insurance & Legacy Assurance',
    amount: 151,
  },
  { _id: 12, dateDue: 28, type: 'INSURANCE', companyName: 'AARP NY Life Insurance', amount: 145 },
  { _id: 13, dateDue: 28, type: 'PHONE', companyName: 'MetroPCS', amount: 52 },
  { _id: 14, dateDue: 20, type: 'GOOGLE', companyName: 'YouTube', amount: 15 },
  { _id: 15, dateDue: 25, type: 'GOOGLE', companyName: 'Google One', amount: 3 },
  {
    _id: 16,
    dateDue: 31,
    type: 'INSURANCE (STAR)',
    companyName: 'Ambetter Health Insurance',
    amount: 32,
  },
];

const FIRST_HALF_MONTH_BILL_TOTAL = bills
  .filter((bill) => bill.dateDue < 19)
  .map((bill) => bill.amount)
  .reduce((a, c) => Number((a + c).toFixed(2)));

const SECOND_HALF_MONTH_BILL_TOTAL = bills
  .filter((bill) => bill.dateDue >= 19)
  .map((bill) => bill.amount)
  .reduce((a, c) => Number((a + c).toFixed(2)));

export { bills, FIRST_HALF_MONTH_BILL_TOTAL, SECOND_HALF_MONTH_BILL_TOTAL };
