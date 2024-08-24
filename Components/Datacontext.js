"use client"
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        invoiceNumber:'',
        invoiceDate:'',
        spocName:'',
        companyName:'',
        contact:'',
        email:'',
        address:'',
        additionalDetails:'',
        accountHolderName:'',
        accountNumber:'',
        panNumber:'',
        ifscCode:'',
        branchName:'',
        additional:'',
        total:'',
        sr1:'',
        sr2:'',
        sr3:'',
        sr4:'',
        sr5:'',
        item1:'',
        item2:'',
        item3:'',
        item4:'',
        item5:'',
        rate1:'',
        rate2:'',
        rate3:'',
        rate4:'',
        rate5:'',
        quantity1:'',
        quantity2:'',
        quantity3:'',
        quantity4:'',
        quantity5:'',
        ammount1:'',
        ammount2:'',
        ammount3:'',
        ammount4:'',
        ammount5:'',
    });

    return (
        // The value prop provides the context data to any components that need it
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};