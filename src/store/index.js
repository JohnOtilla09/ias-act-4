import { legacy_createStore } from "redux";

// This is dummy account list
const dummyAccounts = {
  accounts: [
    {
      email: "otilla@gmail.com",
      password: "123456789",
    },
    {
      email: "sofia@gmail.com",
      password: "123456789",
    },
  ],
};

// userAccount Reducer function
const userAccountsReducer = (state = dummyAccounts, action) => {
    if (action.type === 'ADD_USER') {
        const accounts = state.accounts;
        const newAccount = action.newUser;

        const updateAccounts = [...accounts, newAccount];

        return {accounts: updateAccounts};
    }

    return state;
};

// creating a store
const store = legacy_createStore(userAccountsReducer);

// Export the store to use in components
export default store;

// ito yung code para sa redux men

//  This is in Javscript
// const redux = require('redux');

// const dummyAccounts = [
//     {
//         email: 'otilla@gmail.com',
//         password: '123456789'
//     },
//     {
//         email: 'sofia@gmail.com',
//         password: '123456789'
//     }
// ];

// const userAccountsReducer = (state = dummyAccounts, action) => {
//     if (action.type === 'ADDUSER') {
//         const accounts = [...state];
//         const newAccount = { email: 'otilla@gmail.com', password: '123456789' };

//         const updateAccounts = [...accounts, newAccount];

//         return updateAccounts;
//     }

//     return state;
// };

// const store = redux.legacy_createStore(userAccountsReducer);

// const subscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// };

// store.subscribe(subscriber);

// store.dispatch({ type: 'ADDUSER' });