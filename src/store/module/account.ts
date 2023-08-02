import { createSlice } from '@reduxjs/toolkit';

export interface IAccountState {
  accountInfo: null | {
    email: string;
    endUnix: number;
  };
  orderList: any[];
  activityCode: string | undefined;
}

const initialState: IAccountState = {
  accountInfo: null,
  orderList: [],
  activityCode: undefined
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount(state, { payload }) {
      state.accountInfo = payload;
    },
    updateOrder(state, { payload }) {
      state.orderList = payload;
    },
    updateActivityCode(state, { payload }) {
      state.activityCode = payload;
    }
  }
});

export const { updateAccount, updateOrder, updateActivityCode } =
  accountSlice.actions;
export default accountSlice.reducer;
