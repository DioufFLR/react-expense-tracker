import {createSlice} from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        income: 1000,
        expenseList: [],
    },
    reducers: {
        addExpense: ( currentSlice, action ) =>
        {
            currentSlice.expenseList.push({
                ...action.payload,
                price : Number.parseFloat(action.payload.price)
            })
        },
        setIncome: ( currentSlice, action ) =>
        {
            currentSlice.income = Number.parseFloat(action.payload);
        }
    }
});

const {addExpense, setIncome} = expenseSlice.actions
export {addExpense, setIncome}