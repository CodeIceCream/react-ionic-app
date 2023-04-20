import { model } from '@modern-js-reduck/react';

interface CountModel {
  currencyValue: number;
  currencyType: string;
}

const moneyModel = model<CountModel>('moneyModel').define({
  state: {
    currencyValue: 1.66,
    currencyType: '$',
  },
  actions: {
    addMoney(state, payload) {
      state.currencyValue += payload;
    },
  },
});

export default moneyModel;
