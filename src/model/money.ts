import { model } from "@modern-js-reduck/react";

interface CountModel {
  currencyValue: number,
  currencyType: string
}

const moneyModel = model<CountModel>('count').define({
  state: {
    currencyValue: 1.66,
    currencyType: '$'
  },
  // component: {
  //   showValue: (state: CountModel) => state.currencyValue + state.currencyType
  // },
  actions: {
    add(state, payload) {
      state.currencyValue += payload
    }
  }
})

export default moneyModel
