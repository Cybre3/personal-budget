export default function calculateBudget(state) {
  const {
    income,
    tithe,
    additionalFunds,
    savingsPercentage,
    emergeSavePercentage,
    bills,
    gas,
    food,
    house,
    meds,
    electronicGive,
    cash,
  } = state.data;
  const titheAmount = Number((income * tithe).toFixed(2));
  const income_after_titheBills = Number(
    (income - titheAmount - bills + +additionalFunds).toFixed(2)
  );
  const savingsAmount = Number((income_after_titheBills * (savingsPercentage / 100)).toFixed(2));
  const emergeSaveAmount = Number(
    (income_after_titheBills * (emergeSavePercentage / 100)).toFixed(2)
  );
  const income_after_titheBillsSavings = Number(
    (income_after_titheBills - savingsAmount - emergeSaveAmount).toFixed(2)
  );
  const neccesities = Number(+gas + +food + +house + +meds);
  const cashGiveAmount = Number(
    (income_after_titheBillsSavings - neccesities - +electronicGive).toFixed(2)
  );
  const cash_left = (income_after_titheBillsSavings - (neccesities + +cash)).toFixed(2);

  return {
    titheAmount,
    income_after_titheBills,
    savingsAmount,
    emergeSaveAmount,
    income_after_titheBillsSavings,
    cashGiveAmount,
    cash_left,
  };
}
