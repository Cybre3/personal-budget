import React from 'react';
import Joi from 'joi-browser';

import Form from '../common/form';

class Transfers extends Form {
  state = {
    data: { fromBank: '', toBank: '', transferAmount: '' },
    errors: {},
  };

  schema = {
    fromBank: Joi.string().required().label('fromBank'),
    toBank: Joi.string().required().label('toBank'),
    transferAmount: Joi.string().required().label('Transfer Amount'),
  };

  accountsList = [
    { _id: 1, value: 'Wells Fargo', name: 'WELLS_FARGO_ACCOUNT' },
    { _id: 2, value: 'CUNJ Checking', name: 'CUNJ_CHECKING' },
    { _id: 3, value: 'CUNJ Savings', name: 'CUNJ_SAVINGS' },
    { _id: 4, value: 'Ally Giving', name: 'ALLY_ACCOUNT' },
  ];

  transfer = () => {
    const { fromBank, toBank, transferAmount } = this.state.data;

    if (!transferAmount) return;

    const fromAccountObj = this.accountsList.filter((account) => account.value === fromBank)[0];
    const toAccountObj = this.accountsList.filter((account) => account.value === toBank)[0];
    const fromAccountName = fromAccountObj.name;
    const toAccountName = toAccountObj.name;

    this.props.accounts[fromAccountName] = Number(
      (+this.props.accounts[fromAccountName] - +transferAmount).toFixed(2)
    );
    this.props.accounts[toAccountName] = Number(
      (+this.props.accounts[toAccountName] + +transferAmount).toFixed(2)
    );

    this.props.handleAccounts(this.props.accounts);
  };

  render() {
    return (
      <form onSubmit={this.handleTransfer}>
        <div className="text-center my-4 space-y-4">
          <h2 className="font-bold uppercase">Transfer</h2>
          <div className="flex justify-center gap-x-8">
            <div className="space-y-2">
              {this.renderDropdown('fromBank', 'From Bank', this.accountsList)}
            </div>
            <div className="space-y-2">
              {this.renderDropdown('toBank', 'To Bank', this.accountsList)}
            </div>
          </div>
          {this.renderInput('transferAmount', 'Amount')}
          <button className="bg-white text-black py-0.5 px-3 rounded-md text-sm uppercase">
            Transfer
          </button>
        </div>
      </form>
    );
  }
}

export default Transfers;
