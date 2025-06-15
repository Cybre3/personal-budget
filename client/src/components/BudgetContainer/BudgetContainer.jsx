import React from 'react';
import Joi from 'joi-browser';

import Form from '../common/form';
import calculateBudget from '../../utils/calculations';
import BillsBreakdown from './BillsBreakdown';
import { FIRST_HALF_MONTH_BILL_TOTAL, SECOND_HALF_MONTH_BILL_TOTAL } from './billInfo';
import BankAccounts from './BankAccounts';

class BudgetContainer extends Form {
  state = {
    data: {
      income: 0,
      tithe: 10,
      bills: 0,
      additionalFunds: 0,
      savingsPercentage: 0,
      emergeSavePercentage: 0,
      gas: 0,
      house: 0,
      food: 0,
      meds: 0,
      electronicGive: 0,
      cash: 0,
    },
    errors: {},
   
  };

  componentDidMount() {
    let { tithe } = this.state.data;
    // const DAY_OF_MONTH = new Date().getDate();

    tithe /= 100;

    this.setState({
      data: {
        ...this.state.data,
        tithe,
        // bills: DAY_OF_MONTH >= 19 ? SECOND_HALF_MONTH_BILL_TOTAL : FIRST_HALF_MONTH_BILL_TOTAL,
      },
    });
  }

  schema = {
    _id: Joi.string(),
    income: Joi.number().required().label('Income'),
    tithe: Joi.number().required().label('Tithe Percent'),
    titheAmount: Joi.number().required().label('Tithe Amount'),
    bills: Joi.number().required().label('Bills'),
    additionalFunds: Joi.number().required().label('additionalFunds'),
    savingsPercentage: Joi.number().required().label('savingsPercentage'),
    emergeSavePercentage: Joi.number().required().label('emergeSavePercentage'),
    gas: Joi.number().required().label('gas'),
    house: Joi.number().required().label('house'),
    food: Joi.number().required().label('food'),
    meds: Joi.number().required().label('meds'),
    give: Joi.number().required().label('give'),
    electronicGive: Joi.number().required().label('Electronic Give'),
    cash: Joi.number().required().label('cash'),
  };

  inputClasses = {
    inputContainer: 'col-span-full',
  };

  buttonContainerClass = 'col-span-full justify-self-center pt-6';
  btnClass = 'cursor-pointer bg-neutral-600 py-1 px-4 rounded-md';

  handleAccountChanges = (accounts) => {
    this.setState({ accounts });
  };

  render() {
    const {
      titheAmount,
      income_after_titheBills,
      income_after_titheBillsSavings,
      savingsAmount,
      emergeSaveAmount,
      cash_left,
    } = calculateBudget(this.state);

    return (
      <div className="bg-neutral-700 text-white w-1/2 mx-auto py-4 rounded-md relative">
        <h1 className="text-center text-xl uppercase font-bold my-4">Name Budget {new Date().toLocaleString('en-us', { year: 'numeric', month: 'long'})}</h1>
        <form className="bg-black w-3/4 mx-auto p-4 grid grid-cols-2 auto-rows-auto gap-4 gap-x-4 rounded-md">
          {this.renderInput('income', 'Income')}

          <div className="flex space-x-4">
            <h3>Tithe</h3>
            <span>$ {titheAmount}</span>
          </div>

          <div>
            {this.renderInput('bills', 'Bills')}
            {/* <BillsBreakdown /> */}
          </div>

          <div className="grid grid-rows-2 grid-cols-2">
            <h3>After Tithe & Bills</h3>
            <span>$ {income_after_titheBills}</span>
            {this.renderInput(
              'additionalFunds',
              'Additional Funds',
              'text',
              false,
              this.inputClasses
            )}
          </div>

          <div className="bg-slate-700 p-2 space-y-2 rounded-md border border-white">

            <div className="grid grid-rows-2">
              <div className="flex space-x-2">
                <h3>Emergency Savings</h3>
                <span>$ {emergeSaveAmount}</span>
              </div>
              {this.renderInput('emergeSavePercentage', 'Emerge Savings %')}
            </div>

            <div className="grid grid-rows-2">
              <div className="flex space-x-2">
                <h3>Savings</h3>
                <span>$ {savingsAmount}</span>
              </div>
              {this.renderInput('savingsPercentage', 'Savings %')}
            </div>
            
          </div>

          <div className="justify-self-center self-center text-center">
            <h3>Disposable Income</h3>
            <span>$ {income_after_titheBillsSavings}</span>
          </div>

          <div className="bg-slate-700 p-2 rounded-md space-y-1 border border-white">
            {this.renderInput('gas', 'Gas')}
            {this.renderInput('house', 'House')}
            {this.renderInput('food', 'Food')}
            {this.renderInput('meds', 'Medicine')}
            {this.renderInput('cash', 'Cash')}
            <button className='bg-gray-400 p-1 px-3 text-black border-black border rounded'>add category</button>
          </div>

          <div className="justify-self-center self-center text-center">
            <h3>Cash Left</h3>
            <span>$ {cash_left}</span>
          </div>

          {this.renderButton('SAVE', this.buttonContainerClass, this.btnClass)}
        </form> 

        <hr className="my-10 mb-12" />

        {/* <BankAccounts /> */}
      
      </div>
    );
  }
}

export default BudgetContainer;
