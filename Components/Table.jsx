"use client"
import React, { useContext } from 'react';
import { DataContext } from '../Components/Datacontext'; 

const InvoiceTable = () => {
    const { data } = useContext(DataContext);
    console.log("InvoiceTable Data:", data);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Invoice Bill</h2>
            <table className="w-full border-collapse">
                <tbody>
                    <tr>
                        <td colSpan="2" className="bg-gray-100 font-semibold text-lg p-4">Billing Details</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Invoice Number:</td>
                        <td className="border p-2">{data.invoiceNumber}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Invoice Date:</td>
                        <td className="border p-2">{data.invoiceDate}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">SPOC Name:</td>
                        <td className="border p-2">{data.spocName}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Company Name:</td>
                        <td className="border p-2">{data.companyName}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Contact:</td>
                        <td className="border p-2">{data.contact}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Email:</td>
                        <td className="border p-2">{data.email}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Address:</td>
                        <td className="border p-2">{data.address}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Additional Details:</td>
                        <td className="border p-2">{data.additionalDetails}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="bg-gray-100 font-semibold text-lg p-4">Payment Details</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Account Holder Name:</td>
                        <td className="border p-2">{data.accountHolderName}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Account Number:</td>
                        <td className="border p-2">{data.accountNumber}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">PAN Number:</td>
                        <td className="border p-2">{data.panNumber}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">IFSC Code:</td>
                        <td className="border p-2">{data.ifscCode}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Branch Name:</td>
                        <td className="border p-2">{data.branchName}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Additional:</td>
                        <td className="border p-2">{data.additional}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="bg-gray-100 font-semibold text-lg p-4">Bill</td>
                    </tr>
                    {[...Array(5)].map((_, index) => (
                        <tr key={index}>
                            <td className="border p-2">Sr. No. {index + 1}:</td>
                            <td className="border p-2">{data[`sr${index + 1}`]}</td>
                            <td className="border p-2">Item:</td>
                            <td className="border p-2">{data[`item${index + 1}`]}</td>
                            <td className="border p-2">Rate:</td>
                            <td className="border p-2">{data[`rate${index + 1}`]}</td>
                            <td className="border p-2">Quantity:</td>
                            <td className="border p-2">{data[`quantity${index + 1}`]}</td>
                            <td className="border p-2">Ammount:</td>
                            <td className="border p-2">{data[`ammount${index + 1}`]}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="9" className="bg-gray-100 font-semibold text-right p-4">Total Payable Amount:</td>
                        <td className="border p-2">{data.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceTable;
