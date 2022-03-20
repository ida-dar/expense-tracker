import { TransactionsState } from "./transactionsTypes";

const AppReducer = (state: TransactionsState = [], action: any): any => {
  switch(action.type) {
    default:
      return state;
  }
}

export default AppReducer;