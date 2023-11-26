import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {addExpense, setIncome, incrementCountActionPerformed} from "../expense/expense-slice";
import {act} from "react-dom/test-utils";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    // Première manière
    // predicate: ( action ) =>
    // {
    //     return action.type === 'expenseSlice/addExpense' || action.type === 'expenseSlice/setIncome'
    // },
    // Seconde manière
    matcher: isAnyOf(addExpense, setIncome),
    effect: async ( action, listenerAPI ) =>
    {
        console.log(action)
        listenerAPI.dispatch(incrementCountActionPerformed())
        console.log(listenerAPI.getState())
    }
})